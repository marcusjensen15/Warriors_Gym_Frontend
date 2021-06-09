import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService} from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient,
    private authService: AuthServiceService
  ) { }

  // Need all other GET calls here. Using the getToken() method.

  getUsers(){
    return this.http.get<any>('http://localhost:3000/users', {
      headers: {
        "x-auth-token": <string>this.authService.getToken()
      }
    });
  };
}
