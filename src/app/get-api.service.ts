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
  // This class should probably be renamed to 'API Service'. I'll put all api calls in here and if it is appropriate to segment them out into different services, do so.

  getUsers(): Observable<any>{
    return this.http.get('http://localhost:3000/users', {
      headers: {
        "x-auth-token": <string>this.authService.getToken()
      }
  })
      .pipe(
        catchError(this.errorHandler));
  };

  deleteUser(userIdToDelete): Observable<unknown> {
    const url = `http://localhost:3000/users/${userIdToDelete}`;
    return this.http.delete(url, {
      headers: {
        "x-auth-token": <string>this.authService.getToken()
      }
    })
      .pipe(
        catchError(this.errorHandler));
  }

  addUser(userPayload: any): Observable<any>  {
    const url = 'http://localhost:3000/users';
    // const body = {name: userPayload.nameInput, email: userPayload.emailInput, password: userPayload.passwordInput, isManager: userPayload.isManagerInput, isAdmin: userPayload.isAdminInput};
    const body = {name: userPayload.nameInput, email: userPayload.emailInput, password: userPayload.passwordInput};
    console.log(body);
    return this.http.post<any>(url, body);
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.error || "server error")
  }

  mockApiCall$(){
     return this.http.get<any>('assets/users.json');
  }

}



