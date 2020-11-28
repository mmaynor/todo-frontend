import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ) {
  }
}

@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.css']
})
export class ListtodoComponent implements OnInit {
  todos = [];
  message : string;
  constructor(private toDoservice: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }
  refreshTodos(){
    this.toDoservice.retrieveAllTodo('Michael').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
     )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.toDoservice.deleteTodo('Michael', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete Completed for ${id}`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`);
    this.router.navigate(['todo', id]);
  }

  addTodo(){
    this.router.navigate(['todo', -1]);
  }
}
