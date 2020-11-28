import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/listtodo/listtodo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http : HttpClient) { }

  retrieveAllTodo(username){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todo`);
  }
  deleteTodo(username, id) {
    return this.http.delete(`${API_URL}/users/${username}/todo/${id}`);
  }
  retrieveTodo(username, id) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todo/${id}`);
  }
  updateTodo(username, id, todo) {
    return this.http.put(`${API_URL}/users/${username}/todo/${id}`, todo);
  }
  createTodo(username, todo) {
    return this.http.post(`${API_URL}/users/${username}/todo/`, todo);
  }
}
