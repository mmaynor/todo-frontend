import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListtodoComponent } from './listtodo/listtodo.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'login', component : LoginComponent},
  {path : 'welcome/:name', component : WelcomeComponent, canActivate: [RouteGaurdService]},
  {path: 'todo', component : ListtodoComponent, canActivate: [RouteGaurdService]},
  {path: 'logout', component : LogoutComponent, canActivate: [RouteGaurdService]},
  {path: 'todo/:id', component : TodoComponent, canActivate: [RouteGaurdService]},
  {path : '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
