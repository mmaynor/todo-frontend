import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../listtodo/listtodo.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'', false, new Date());

    if(this.id != -1) {
    this.todoService.retrieveTodo('Michael', this.id).subscribe(
      data => this.todo = data
      )
    }
  }

  saveTodo(){
    if(this.id == -1) {
      this.todoService.createTodo('Michael', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todo']);
        }
      )
    } else {
    this.todoService.updateTodo('Michael', this.id, this.todo).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['todo']);
      }
    )
    }
  }
}
