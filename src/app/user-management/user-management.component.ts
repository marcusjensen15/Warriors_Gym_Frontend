import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../get-api.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  public users = ["User 1", "User 2", "User 3", "User 4"];


  constructor(private api:GetApiService) {}

  //This is a basic API Call. Adjust with real users.

  ngOnInit() {

    this.api.getUsers().subscribe((data)=>{
      console.log("get api data", data);
      this.users = Object.values(data);
    })
  }

}
