import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnChanges {
  @Input() max: number;
  private instanceCount = 0;

  constructor() {
    this.instanceCount++;
    console.log('Child2Component.construct', this.instanceCount);
  }

  ngOnInit() {
    console.log('Child2Component.onInit');
  }

  ngOnChanges(changes) {
    console.log('Child2Component.onChanges', changes);
  }
}
