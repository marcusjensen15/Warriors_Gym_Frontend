import { Component, OnInit } from '@angular/core';
import { GetApiService} from "../get-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public quizQuestions = [] as any;
  public quizCategory : string;

  //will keep track of the total number of questions the user has completed

  public quizProgressCounter = 0;

  //This variable will hold the current question object

  public currentQuestion = <any> {};

  //will count the number of answers the user has gotten correct:
  public correctAnswerCounter = 0;

  //will get the correct answer position of the current question
  public correctAnswerArrayPosition : number;

  //will hold the user's submitted answer

  public userSubmittedAnswer : number;

  //false if there are additional questions, true if not.
  // in HTML file, will render 'results' instead of another question if 'true'

  public isFinalQuestion = false;

  constructor(private activatedRoute: ActivatedRoute, private api:GetApiService) { }

  getQuestionsByCategoryHandler(questionCategory) {
   return this.api.getQuestionsByCategory(questionCategory).subscribe(
      data => {
        data.forEach((element:any) => {this.quizQuestions.push(element);
        });
        console.log(this.quizQuestions);
        this.setQuestion();
      }
    );
  }

  getSubmittedAnswerArrayPosition(selectedAnswerPosition){
    this.userSubmittedAnswer = parseInt(selectedAnswerPosition.answerSubmission);
    //will collect the answer submitted by the user, and set the userSubmittedAnser
  }

  setQuestion() {
    this.currentQuestion = this.quizQuestions[this.quizProgressCounter];
    console.log(this.currentQuestion);
    //will set the current question
  };

  adjustQuizProgress(){
    //will count the 'question number' that the user is on
    //adjust 'quizProgressCounter' accordingly
    this.quizProgressCounter++;

    console.log(this.quizProgressCounter);
  }

  getCorrectAnswerArrayPosition(){
    //Get the correct answer position of the current question via API.
    this.correctAnswerArrayPosition = this.currentQuestion.correctAnswerPosition;
    console.log(this.correctAnswerArrayPosition);


  }

  adjustScore(){
    //will compare userSubmittedAnswer v correctAnswerArrayPosition, and increment
    //correctAnswerCounter if they are the same

    if (this.currentQuestion.correctAnswerPosition === this.userSubmittedAnswer){
      this.correctAnswerCounter++;
    }

    console.log(this.correctAnswerCounter);
  };

  isFinalQuestionCheck(){
    //will check to see if this is the final question in the quiz, if so
    //on submit turn 'isFinalQuestion' to 'true'
    //will conditionally render 'results' instead of another question
    if (this.quizProgressCounter === this.quizQuestions.length){
      this.isFinalQuestion = true;
    }
    console.log(this.isFinalQuestion);
  };

  onSubmitAnswer(selectedAnswer){
    //will call all applicable functions:
    console.log('clicked');
    this.getCorrectAnswerArrayPosition();
    this.getSubmittedAnswerArrayPosition(selectedAnswer);
    console.log(this.userSubmittedAnswer);

    this.adjustScore();
    this.adjustQuizProgress();
    // serveNextQuestion ->
    this.isFinalQuestionCheck();
    this.setQuestion();

  };

  getQuizCateogry(){
    this.quizCategory = this.activatedRoute.snapshot.params['quizCategory'];
  }

  async ngOnInit() {
     await this.getQuizCateogry();
     await this.getQuestionsByCategoryHandler(this.quizCategory);
  }

}
