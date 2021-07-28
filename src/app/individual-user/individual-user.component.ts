import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-individual-user',
  templateUrl: './individual-user.component.html',
  styleUrls: ['./individual-user.component.sass']
})
export class IndividualUserComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
