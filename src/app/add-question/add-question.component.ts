import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  public muscleGroups = ["Tournaments", "Assessments", "Training", "Resources", "Courses", "Administration", "Content", "Metrics"];
  constructor() { }

  ngOnInit(): void {
  }

  onQuestionFormSubmit(data){
    console.log(this.correctlyFormPayload(data));
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
