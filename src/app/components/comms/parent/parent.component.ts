import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {
public title = 'Parent';
public selectedRow: any;
private products = [];

  constructor() {
    console.log('ParentComponent.construcor');
  }

  ngOnInit() {
    console.log('ParentComponent.onInit');
    this.products = this.getProducts();
  }
  ngOnChanges(e) {
    console.log('ParentComponent.onChanges', e);
  }

  clickRow(d) {
    console.log('ParentComponent.clickRow', d);
    this.selectedRow = d;
  }

  updateStock(evt) {
    console.log('ParentComponent.updateStock', evt);
    let id = evt.product.id;
    if(parseInt(evt.newStock)) {
      let prod;
      prod = this.products.find( e => e.id == id);
      console.log(id, prod);
      prod.stock = evt.newStock;
    }
  }
  getProducts() {
    return [
        { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
        { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
        { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
        { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
        { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
    ];
  }
}
