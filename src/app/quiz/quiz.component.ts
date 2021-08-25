import { Component, OnInit } from '@angular/core';
import { GetApiService} from "../get-api.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public quizQuestions = [] as any;

  constructor(private api:GetApiService) { }

  getQuestionsByCategoryHandler(questionCategory) {
    return this.api.getQuestionsByCategory(questionCategory).subscribe(
      data => {
        data.forEach((element:any) => {this.quizQuestions.push(element);
        });
        console.log(this.quizQuestions);
      }
    );
  }

  ngOnInit() {
    this.getQuestionsByCategoryHandler('Administration');
  }

}
