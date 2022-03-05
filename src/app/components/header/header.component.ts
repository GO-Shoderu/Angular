import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // mine: string = 'Task Tracker is mine';
  title: string = 'Task Tracker';

  constructor() { }

  // this will be used most of the time when initializing the code
  // e.g when making http request
  ngOnInit(): void {
  }

  //here you specify what you want the button to do
  toggleAddTask(){
    console.log('Toggle');
  }

}
