import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  public muscleGroups = ["Tournaments", "Assessments", "Training", "Resources", "Courses", "Administration", "Content", "Metrics"];
  public selectedMuscleGroup: string;

  constructor() { }

  ngOnInit(): void {
  }

  onQuestionFormSubmit(data){
    console.log(data.muscleGroup);
  }

}
