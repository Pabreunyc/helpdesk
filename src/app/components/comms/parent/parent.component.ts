import { Component, OnInit,  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
public title = 'Parent';
public max:number = 5;
private list:number[];

  constructor() {
    console.log('ParentComponent.construcor');
    this.list = [];
    for(let i=0; i < this.max; i++) {
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
