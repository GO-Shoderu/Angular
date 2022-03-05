import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  //retrieving input from header.component.html
  //header.component calls the app-button selector for
  // it to be used in there 
  @Input() text!: string;
  @Input() color!: string;

  // creating event listener for the button 
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //this is the function used in the button.component.html
  onClick(){
    this.btnClick.emit();
  }

}
