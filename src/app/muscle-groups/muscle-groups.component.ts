import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muscle-groups',
  templateUrl: './muscle-groups.component.html',
  styleUrls: ['./muscle-groups.component.scss']
})
export class MuscleGroupsComponent implements OnInit {

  //If you want to add a new muscle group, add it to the array below.

  public muscleGroups = ["Tournaments", "Assessments", "Training", "Resources", "Courses", "Administration", "Content", "Metrics"];

  constructor() { }

  ngOnInit(): void {
  }

}
