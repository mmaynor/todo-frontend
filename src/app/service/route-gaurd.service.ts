import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate{

  constructor(private hardcodedAuthentication : HardcodedAuthenticationService, private router : Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.hardcodedAuthentication.isUserLoggedIn())
        return true;
      this.router.navigate(['login']);
      return false;
    }   
}