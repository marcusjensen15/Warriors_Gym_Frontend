import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-individual-user',
  templateUrl: './individual-user.component.html',
  styleUrls: ['./individual-user.component.sass']
})
export class IndividualUserComponent implements OnInit {

  userEmail = "";
  constructor( private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(){
    // Works first time only
    console.log(this.activatedRoute.snapshot.params['name']);
    this.userEmail = this.activatedRoute.snapshot.params['name'];
    // For later use, updates everytime you change route
    this.activatedRoute.params.subscribe((params) => {console.log(params['name'])});
  }

}
