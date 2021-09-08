import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-muscle-groups',
  templateUrl: './muscle-groups.component.html',
  styleUrls: ['./muscle-groups.component.scss']
})
export class MuscleGroupsComponent implements OnInit {

  //If you want to add a new muscle group, add it to the array below.

  public muscleGroups = ["Tournaments", "Assessments", "Training", "Resources", "Courses", "Administration", "Content", "Metrics"];
  public muscleGroupAccess: boolean;

  constructor(
    private authService:AuthServiceService
  ) { }

  async handleUserTokenCheck(){

    const token = await this.authService.getToken();

    if(!token){
      this.muscleGroupAccess = false
    }

    console.log(this.muscleGroupAccess);
    await this.authService.userTokenVerification('meat')
      .subscribe(data => console.log(data),
        (error)=>{
        console.log(error.error);
        this.muscleGroupAccess = false;
        console.log(this.muscleGroupAccess);
        });

  }

  async ngOnInit() {
      await this.handleUserTokenCheck();
  }

}
