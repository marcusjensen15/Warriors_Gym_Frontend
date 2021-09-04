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

  logout(){
    //should remove token from localStorage
    localStorage.removeItem('token');
  }

  // Double ! will always return true or false.

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
