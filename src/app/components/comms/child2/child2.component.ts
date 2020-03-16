import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnChanges {
@Input() private product: any;
@Output() private stockChange: EventEmitter<any> = new EventEmitter();

private instanceNum: number;
private buttonColor: string;
private newStock: number;

  constructor() {
    this.buttonColor = '';
    this.instanceNum = Math.random();
    console.log('Child2Component.constructor', this.instanceNum);
  }

  ngOnInit() {
    // console.log('Child2Component.onInit', this.instanceNum);
    // console.log('Child2Component.onInit', this.productPrice, this.productStock);
  }

  updateStock(evt) {
    console.log('Child2Component.updateStock', this.instanceNum);
    console.log('Child2Component.updateStock', this.product, this.newStock);

    this.buttonColor = '';
    if(this.newStock > this.product.stock)
      this.buttonColor = "ui-button-success";
    else if(this.newStock < this.product.stock)
      this.buttonColor = "ui-button-danger";

    this.stockChange.emit({ product:this.product, newStock: this.newStock });
  }

  ngOnChanges(evt) {
    console.log('Child2Component.onChanges',evt);
  }
}
