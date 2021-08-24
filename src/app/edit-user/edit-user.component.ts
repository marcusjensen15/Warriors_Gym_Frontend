import { Component, OnInit } from '@angular/core';
import {GetApiService} from "../get-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public userEmail : string;
  public result = <any> {};
  public errorMsg: string;

  constructor(private activatedRoute: ActivatedRoute, private api:GetApiService) { }

  onFormSubmit(data){
    this.api.addUser(data).subscribe(     res =>{
      console.log(res);
    });
  }

  ngOnInit() {

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
