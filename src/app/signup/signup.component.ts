import { Component, OnInit } from '@angular/core';
import {GetApiService} from "../get-api.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public errorMessage: string;

  constructor(private api: GetApiService) {
  }

  ngOnInit(): void {
  }


  onFormSubmit(data) {

    if(data.passwordInput === data.passwordConfirmInput){
      this.api.addUser(data).subscribe(res => {
          console.log(res);
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
