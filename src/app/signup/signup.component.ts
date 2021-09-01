import { Component, OnInit } from '@angular/core';
import {GetApiService} from "../get-api.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private api:GetApiService) { }

  ngOnInit(): void {
  }
  onFormSubmit(data){
    this.api.addUser(data).subscribe(     res =>{
      console.log(res);
    });
  }

}
