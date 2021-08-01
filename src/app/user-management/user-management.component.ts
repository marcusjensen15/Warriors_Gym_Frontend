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

  public result = [] as any;
  public errorMsg: string;
  mockUsers$;

  async deleteUserHandler (userIdToDelete){
    await this.api.deleteUser(userIdToDelete).subscribe();
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }


  constructor(private api:GetApiService, public authService:AuthServiceService) {

  }

  //This is a basic API Call. Adjust with real users.

  ngOnInit() {
    // below is strictly for testing

    this.mockUsers$ = this.api.mockApiCall$()

    // above is strictly for testing.

    this.api.getUsers().subscribe(
  data => {
          // console.log("get api data", data);
          data.forEach((element: any) => {this.result.push({"email": element.email, "id": element._id});
          });
          console.log(this.result);
        },
      error => this.errorMsg = error
    )
  }
}
