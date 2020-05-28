import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  constructor(private taskService:TaskService) { 

  }

  myTasks:any;

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks():void{
    this.taskService.getAllTasks().subscribe(
      (data) => this.myTasks = data
    );
  }

}

