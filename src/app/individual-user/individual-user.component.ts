import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GetApiService} from "../get-api.service";
import {AuthServiceService} from "../auth-service.service";

@Component({
  selector: 'app-individual-user',
  templateUrl: './individual-user.component.html',
  styleUrls: ['./individual-user.component.scss']
})
export class IndividualUserComponent implements OnInit {

  public userEmail : string;
  public result = <any> {};
  public errorMsg: string;


  //should be checking for admin user, not normal user

  // public individualUserAccess = true;

  async deleteUserHandler (userIdToDelete){
    await this.api.deleteUser(userIdToDelete).subscribe();
    this.refresh();
  };

  refresh(): void {
    window.location.reload();
  }

  constructor( private activatedRoute: ActivatedRoute,
               private api:GetApiService,
               private authService: AuthServiceService) {

  }

  //should be checking for admin user, not normal user

  // async handleUserTokenCheck(){
  //
  //   const token = await this.authService.getToken();
  //
  //   if(!token){
  //     this.individualUserAccess = false
  //   }
  //
  //   await this.authService.userTokenVerification(token)
  //     .subscribe(data => console.log(data),
  //       (error)=>{
  //         console.log(error.error);
  //         this.individualUserAccess = false;
  //       });
  //
  // }



  ngOnInit(){
    // We are going to need an api call here to get the rest of this data.

    //should be checking for admin user, not normal user.
    // this.handleUserTokenCheck();

    this.userEmail = this.activatedRoute.snapshot.params['name'];

    this.api.getUsers().subscribe(
      data => {
        let individualUser = data.filter(e => e.email === this.userEmail)
        console.log(individualUser);
        this.result = individualUser[0];
      },
      error => this.errorMsg = error
    )

  }

}
