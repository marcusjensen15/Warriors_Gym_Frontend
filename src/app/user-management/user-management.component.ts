import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../get-api.service';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  // users are dummy values in case there is no API connected

  public users = ["User 1", "User 2", "User 3", "User 4"];
  public result : string[] = [];


  constructor(private api:GetApiService, public authService:AuthServiceService) {}

  //This is a basic API Call. Adjust with real users.

  ngOnInit() {

    this.api.getUsers().subscribe((data)=>{
      console.log("get api data", data);

      data.forEach((element: any) => {this.result.push(element.email);
      });

      this.users = this.result;

    })
  }
}
