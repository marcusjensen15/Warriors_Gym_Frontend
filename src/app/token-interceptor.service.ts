import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthServiceService} from './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: any, next: any){
    let authsService = this.injector.get(AuthServiceService);
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authsService.getToken()}`
      }
    })
    return next.handle(tokenizedRequest);
  }
}
