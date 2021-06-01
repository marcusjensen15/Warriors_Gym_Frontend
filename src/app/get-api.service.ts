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
    // Will need to create an auth service, pass in token as argument in future. For now, just hard code it to get this wired up at a basic level

  getUsers(){
    return this.http.get<any>('http://localhost:3000/users', {
      headers: {
        'Content-Type' : "application/x-www-form-urlencoded; charset=UTF-8",
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI1NGVmYWEzM2ViODA0MjhiZDkyYjkiLCJpc0FkbWluIjp0cnVlLCJpc01hbmFnZXIiOnRydWUsImlhdCI6MTYyMjQ5NTA3Nn0.TkP4OBL401w22wNnmqaGdEO9Nfw10A-xiiDKkRfWIbo"}
    });
  };
}
