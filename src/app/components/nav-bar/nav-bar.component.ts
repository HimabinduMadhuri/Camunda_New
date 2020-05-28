import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateTaskComponent } from '../create-task/create-task.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  @ViewChild(CreateTaskComponent,{static:false}) createTask:CreateTaskComponent;

  ngOnInit() { }

}
