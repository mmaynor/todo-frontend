import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username = ''
  constructor(private route : ActivatedRoute, private welcomeData : WelcomeDataService) { }
  welcomeMessageFromService : string;

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name']
  }
  getWelcomeMessage(){
    this.welcomeData.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  getWelcomeMessageWithParameter(){
    this.welcomeData.executeHelloWorldBeanServiceWithPathVariable(this.username).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
  }
  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }
}
