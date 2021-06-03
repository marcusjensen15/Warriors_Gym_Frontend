import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private authService:AuthServiceService,
    private router:Router) { }

  ngOnInit(){
    this.initForm();
   }
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  // This token being stored in local storage will be the same within 'signup' view

  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value)
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

  }

}
