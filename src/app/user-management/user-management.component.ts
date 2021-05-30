import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  public users = ["User 1", "User 2", "User 3", "User 4"];

  constructor() {}

  ngOnInit(): void {
  }

}
