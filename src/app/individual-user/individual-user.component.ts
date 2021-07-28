import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GetApiService} from "../get-api.service";

@Component({
  selector: 'app-individual-user',
  templateUrl: './individual-user.component.html',
  styleUrls: ['./individual-user.component.sass']
})
export class IndividualUserComponent implements OnInit {

  public userEmail : string;
  public result : any;
  public errorMsg: string;
  constructor( private activatedRoute: ActivatedRoute, private api:GetApiService) {

  }



  ngOnInit(){
    // We are going to need an api call here to get the rest of this data.
    // We are going to need functions that communicate with the api to delete/edit users.-
    // Works first time only

    this.userEmail = this.activatedRoute.snapshot.params['name'];

    this.api.getUsers().subscribe(
      data => {
        let individualUser = data.filter(e => e.email === this.userEmail)
        console.log(individualUser);
        this.result = individualUser[0];
      },
      error => this.errorMsg = error
    )

    // For later use, updates everytime you change route
    // this.activatedRoute.params.subscribe((params) => {console.log(params['name'])});
  }

}
