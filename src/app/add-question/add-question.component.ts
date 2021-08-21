import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../get-api.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  public muscleGroups = ["Tournaments", "Assessments", "Training", "Resources", "Courses", "Administration", "Content", "Metrics"];
  constructor(private api:GetApiService) { }

  ngOnInit(): void {
  }

  onQuestionFormSubmit(data){
    // console.log(this.correctlyFormPayload(data));

    //below is just to make sure we are making API call correctly. Need to revise backend to correclty accept data in this shape.

    const fakePayload = {
      possibleAnswers: ["here is", "some fake", "answers from front end", "choosy choose"],
      question: "Hello from the front end",
      type: "hi from front end",
      category: "some front end fun",
      correctAnswer: "frontend correct answer"
    };

    this.api.addQuestion(fakePayload).subscribe(     res =>{
      console.log(res);
    });

    console.log(fakePayload);
  }

  correctlyFormPayload(data){

    let correctlyFormedData = {
      possibleAnswers:[data.optionOne,data.optionTwo,data.optionThree,data.optionFour],
      muscleGroup: data.muscleGroup,
      questionTextInput: data.questionTextInput,
      correctAnswerPosition: parseInt(data.correctAnswerPosition)
    }

    return correctlyFormedData
  }

}
