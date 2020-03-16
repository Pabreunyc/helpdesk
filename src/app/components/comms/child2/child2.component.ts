import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
@Input() maxc: number;
public ch1: string;
  constructor() { }

  ngOnInit() {
    console.log('Child2Component.onInit', this.maxc);
    this.ch1 = 'a string';
  }

  fireEvent(evt) {
    console.log('Child2Component.fireEvent', evt);
  }
}
