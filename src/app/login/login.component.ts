import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'try'
  password = 'Maynor'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router : Router, private hardcodedAuthentication : HardcodedAuthenticationService, private basicAuthenticationService : BasicAuthenticationService ) { }

  ngOnInit(): void {
  }
  login(){
    // console.log(this.username);
    //if(this.username === 'Michael' && this.password === 'me') {
      if(this.hardcodedAuthentication.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

  basicAuthLogin(){
      console.log(this.username)
      console.log(this.password)
    //if(this.username === 'Michael' && this.password === 'me') {
      this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
          }
      )
    //} 
  }
}
