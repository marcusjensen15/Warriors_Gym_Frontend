import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private authService:AuthServiceService) { }

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
      this.authService.login(this.formGroup.value).subscribe(
        result=>{

        if(result.token){
          console.log("successful!",result);
          localStorage.setItem('token', result.token)
        }

        else{
          console.log("failed", result);
        }

      });
    }

  }

}
