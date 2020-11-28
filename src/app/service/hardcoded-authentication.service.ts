import { Injectable } from '@angular/core';

export const User = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password) {
    if(username === 'Michael' && password === 'me') {
      sessionStorage.setItem(User, username) 
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(User)
    return !(user === null) 
  }

  logout(){
    sessionStorage.removeItem(User)
  }
}
