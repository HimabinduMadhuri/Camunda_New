import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  createuri = 'http://localhost:8080/engine-rest/process-definition/key/InterviewTracker/start';

  constructor(private http: HttpClient) { }

  userUrl ="http://localhost:8080/engine-rest/task?processDefinitionKeyIn=InterviewTracker&assignee=demo";

  

  getAllTasks() {
    return this
           .http
           .get(`${this.userUrl}`);
  }

  addTask(data) {
    return this.http.post(`${this.createuri}`, data);
  }

}
