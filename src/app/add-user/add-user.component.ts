import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../get-api.service';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private api:GetApiService) { }

  ngOnInit(): void {
  }

  onFormSubmit(data){
    this.api.addUser(data).subscribe(     res =>{
      console.log(res);
    });
  }

}
