import { Component, OnInit } from '@angular/core';
import {GetApiService} from "../get-api.service";
import {AuthServiceService} from "../auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public errorMessage: string;

  constructor(
    private api: GetApiService,
    private authService:AuthServiceService,
    private router:Router) {
  }

  ngOnInit(): void {
  }

  loginProcess(data){
      this.authService.login(data)
        .subscribe(
          (result)=>{

            console.log("successful!",result);
            localStorage.setItem('token', result.token)
            this.router.navigate(['/musclegroups'])
          },
          (error)=>{

            // Need to display this error text somewhere the user can see it (not in the console). Write to DOM somewhere.
            console.log(error.error);
          }
        );
  }


  onFormSubmit(data) {

    if(data.passwordInput === data.passwordConfirmInput){
      this.api.addUser(data).subscribe(res => {
          console.log(res);
          this.loginProcess(
            {
              email: data.emailInput,

              password: data.passwordInput
            });

        },

        (error) => {
          console.log(error.error);
          this.errorMessage = error.error;
          console.log(this.errorMessage);
        }
      );
    }

    else {
      this.errorMessage = "Your passwords do not match.";
    }
  }
}
