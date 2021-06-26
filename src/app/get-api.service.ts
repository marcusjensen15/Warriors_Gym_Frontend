import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthServiceService} from './auth-service.service';
import { Observable} from "rxjs";
import { catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient,
    private authService: AuthServiceService
  ) { }

  // Need all other GET calls here. Using the getToken() method.

  getUsers(): Observable<any>{
    return this.http.get('http://localhost:3000/users', {
      headers: {
        "x-auth-token": <string>this.authService.getToken()
      }
  })
      .pipe(
        catchError(this.errorHandler));
  };

  errorHandler(error: HttpErrorResponse){
    return throwError(error.error || "server error")
  }

  mockApiCall$(){
     return this.http.get<any>('assets/users.json');
  }

}



