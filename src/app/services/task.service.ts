import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import {Task} from '../Task'
import {TASKS} from '../mock-tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  // getTasks():Task[] {
  //   return TASKS;
  // }

  //making use of observable since will be making use of asynchronous data 
  //that's because we are fetching from the server
  // getTasks(): Observable <Task[]> {
  //   const tasks = of(TASKS)
  //   return tasks;
  // }

  getTasks(): Observable <Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

}
