import { Component, OnInit, OnChanges, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit, OnChanges {
@Input() private inner: any;
private title = 'This is a Title';

  constructor() { }

  ngOnInit() {
    console.log('Child3Component.onInit');
  }
  ngOnChanges(d) {
    console.log('Child3Component.onChanges', d);
  }
}
