import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  userName:Profile = new Profile("Xxxx xxxxx","Xxxx, xxxx, xxx","XXXX (XX)","XX");

  ngOnInit() {
  }

}
