import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message : string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http : HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>(`${API_URL}/helloworld-bean`);
  }
  
  executeHelloWorldBeanServiceWithPathVariable(name){
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders(
    //   {
    //     Authorization: basicAuthHeaderString
    //   }
    // )
    return this.http.get<HelloWorldBean>(`${API_URL}/helloworld-bean/path-variabe/${name}`, //{headers}
    );
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'Michael';
  //   let password = 'me'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);
  //   return basicAuthHeaderString; 
  // }
}
