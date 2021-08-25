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

  constructor(private activatedRoute: ActivatedRoute, private api:GetApiService) { }

  getQuestionsByCategoryHandler(questionCategory) {
    return this.api.getQuestionsByCategory(questionCategory).subscribe(
      data => {
        data.forEach((element:any) => {this.quizQuestions.push(element);
        });
        console.log(this.quizQuestions);
      }
    );
  }

  getQuizCateogry(){
    this.quizCategory = this.activatedRoute.snapshot.params['quizCategory'];
  }

  ngOnInit() {
    this.getQuizCateogry();
    this.getQuestionsByCategoryHandler(this.quizCategory);
  }

}
