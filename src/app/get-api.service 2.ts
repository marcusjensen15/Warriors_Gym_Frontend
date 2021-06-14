import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }

  // Adjust link below to real get users API call. Need to figure out how this works with tokens.

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  };
}
