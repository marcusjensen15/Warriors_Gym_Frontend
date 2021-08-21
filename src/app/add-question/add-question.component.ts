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
    
    this.api.addQuestion(this.correctlyFormPayload(data)).subscribe(     res =>{
      console.log(res);
    });

    console.log(this.correctlyFormPayload(data));
  }

  correctlyFormPayload(data){

    let correctlyFormedData = {
      possibleAnswers:[data.optionOne,data.optionTwo,data.optionThree,data.optionFour],
      category: data.muscleGroup,
      question: data.questionTextInput,
      correctAnswerPosition: parseInt(data.correctAnswerPosition)
    }

    return correctlyFormedData
  }

}
