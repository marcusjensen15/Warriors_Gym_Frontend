import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  public muscleGroups = ["Tournaments", "Assessments", "Training", "Resources", "Courses", "Administration", "Content", "Metrics"];
  // public correctAnswerArrayPosition = null;
  constructor() { }

  ngOnInit(): void {
  }

  onQuestionFormSubmit(data){
    //Need to figure out how to 'bundle' the answers and the radio buttons together, so each answer has a correct/incorrect flag.
    // data.correctAnswerArrayPostion = this.correctAnswerArrayPosition;
    console.log(data);
  }

}
