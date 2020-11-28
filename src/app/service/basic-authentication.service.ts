import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { API_URL } from '../app.constants';

export const User = 'authenticatedUser';
export const Token = 'token';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);

    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(User, username) 
          sessionStorage.setItem(Token, basicAuthHeaderString) 
        return data
        }
      )
    );
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'Michael';
  //   let password = 'me'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);
  //   return basicAuthHeaderString; 
  // }
 
  getAuthenticatedUser(){
    return sessionStorage.getItem(User)
  }
  
  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem(Token)
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(User)
    return !(user === null) 
  }

  logout(){
    sessionStorage.removeItem(User)
    sessionStorage.removeItem(Token)
  }
}
export class AuthenticationBean {
  constructor(public message: string) {}
}