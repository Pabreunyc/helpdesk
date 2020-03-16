import { Component, OnInit,  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
public title = 'Parent';
public maxp: number;
private list: number[];

  constructor() {
    console.log('ParentComponent.construcor');
    // this.maxp = Math.random();
    this.maxp = 5;
    this.list = [];
    for(let i=0; i < this.maxp; i++) {
      this.list.push(i+100);
    }
    console.log('>>>', this.list);
  }

  ngOnInit() {

  }

  buttonClick(n) {
    console.log('ParentComponent.buttonClick', n);
  }
}
