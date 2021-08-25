import { Component, OnInit } from '@angular/core';
import {GetApiService} from "../get-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public userEmail : string;
  public result = <any> {};
  public errorMsg: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private api:GetApiService) { }



  onFormSubmit(data){
    this.api.editUser(this.getEditedValues(data)).subscribe(     res =>{
      console.log(res);
    });
    // this.getEditedValues(data);
    console.log(data);
    this.router.navigate(['/users-management']);
    // this.redirectTo('/users-management');

  }

  // redirectTo(uri:string){
  //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  //     this.router.navigate([uri]));
  // }

  // refresh(): void {
  //   window.location.reload();
  // }

  //below method is a really hacky solution to form not correctly getting values
  // if the user's name and email are not edited. I'm sure there is a better way to do this

  getEditedValues(data){
    if(data.nameInput.length === 0){
      data.nameInput = this.result.name;
    }
    if(data.emailInput.length === 0){
      data.emailInput = this.result.email;
    }
    data.id = this.result._id;
    return data;
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
