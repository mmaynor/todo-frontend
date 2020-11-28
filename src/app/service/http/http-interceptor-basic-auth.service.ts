import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'Michael';
    // let password = 'me'
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username= this.basicAuthenticationService.getAuthenticatedUser();

    if(username && basicAuthHeaderString) {
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
      }
      })
    return next.handle(request);
    } else {
      return next.handle(request);
    }
  } 
}
