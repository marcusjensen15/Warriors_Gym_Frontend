import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders} from '@angular/common/http'


// const httpOptionsPlain = {
//   headers: new HttpHeaders({
//     'Accept': 'text/plain',
//     'Content-Type': 'text/plain'
//   }),
//   'responseType': 'text'
// };

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  // We can also save the base URL as an ENV variable instead of having the whole thing here.

  login(data: any):Observable<any>{
    return this.http.post(`http://localhost:3000/auth`, data);
  }
}
