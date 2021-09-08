import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  // We can also save the base URL as an ENV variable instead of having the whole thing here.
  // All of the Auth/Admin checks are happening on the backend.

  login(data: any):Observable<any>{
    return this.http.post(`http://localhost:3000/auth`, data);
  }

  //Logs user out of app

  logout(){
    //should remove token from localStorage
    localStorage.removeItem('token');
  }

  // Double ! will always return true or false.

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  //Gets the user's token from localStorage
  getToken(){
    return localStorage.getItem('token')
  }

  userTokenVerification(token){
    const url = `http://localhost:3000/auth/usertokenverification`;
    return this.http.post(url, null,{
      headers: {
        "x-auth-token": token
      }
    })
  }

    adminTokenVerification(token){
    const url = `http://localhost:3000/auth/admintokenverification`;
    return this.http.post(url, null,{
      headers: {
        "x-auth-token": token
      }
    })
  }




}
