import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';

import { HelpdeskTicket } from '../../_models/helpdesk_ticket';
import { CommsService } from '../../_services/comms.service';

let self; // hack

@Component({
  selector: 'app-comms',
  templateUrl: './comms.component.html',
  styleUrls: ['./comms.component.css']
})
export class CommsComponent implements OnInit {
private action = 'new';
private selectedHero;

public dateSubmitted;
public selected = { productId:null, categoryId:null, priorityId:null };
public ticket:  HelpdeskTicket;

  constructor( private commsService: CommsService) {
    console.log('CommsComponent.constructor');
    this.ticket = resetTicket();
    self = this;
  }

  ngOnInit() {
    console.log('CommsComponent.onInit');
    //this.ticket.id = 666;
    this.ticket.creatorId = 4;
    this.ticket.title = 'Invisible Woman';
    this.ticket.department = 'FF';
    this.ticket.phone = '(212)444-4442';

    console.log(this, self);
    // SUBSCRIPTION ------------------------------------------
    let r = this.commsService.on('Major', evt => this.showTicket(evt));
    console.log('subscription', r);
  }
  ngOnDestroy() {
    console.log('CommsComponent.DESTROY');

  }
  gooFunc(evt) {
    console.log('goo', evt);
  }
  getDetails(evt) {
    console.log('getDetails', evt);
    // this.selectedHero = this.commsService.getHero(evt);
    console.log('&&&', this.selectedHero);
  }

  newTicket(d) {
    console.log('CommsComponent.newTicket');

    this.ticket = resetTicket();
    this.selected = { productId:null, categoryId:null, priorityId:null };
  }

  submitForm(d) {
    console.log('submitForm', this.ticket, this.selected);

    let action = 'new';
    this.ticket.status = 'open';
    // new ticket
    if(this.ticket.id === 0) {
      this.ticket.dateCreated = new Date().toString();
    } else {
      action = 'update';
    }

    this.ticket.productId = this.selected.productId;
    this.ticket.categoryId = this.selected.categoryId;
    this.ticket.priorityId = this.selected.priorityId;
    this.commsService.saveTickets({ action:action, ticket:this.ticket });

    this.ticket = resetTicket();
    this.selected = { productId:null, categoryId:null, priorityId:null };
  }

  showTicket(evt) {
    let id = evt.detail;
    console.log('CommsComponent.showTicket', id);

    this.ticket = resetTicket();
    this.selected = { productId:null, categoryId:null, priorityId:null };

    if(id) {
      //console.log(this);
      this.ticket = resetTicket();
      let data = this.commsService.getTicket(id);
      console.log('CommsComponent.showTicket', data);

      this.commsService.getTicket(id)
        .subscribe(
          d => {
            console.log(d);
            data = d;
            this.selected.productId   = data.productId;
            this.selected.categoryId  = data.categoryId;
            this.selected.priorityId  = data.priorityId;
            this.ticket = data;
          });

      self.selected.productId   = data.productId;
      self.selected.categoryId  = data.categoryId;
      self.selected.priorityId  = data.priorityId;
    }
  }

  Goo(id) {
    console.log('goo.1', id, this.selected[id]);
    if(this.selected[id] === null) return true;
    let v = this.selected[id].slice(0, this.selected[id].length - 1);
    let n = this.selected[id].slice(this.selected[id].length - 1);
    let x = this.selected[id] = v + (((n + 1) % 3) + 1);
    console.log('goo.2', x);
  }

}

function resetTicket() {
  console.log('reseting ticket');

  return {
    title: 'Invisible Woman',
    department: 'FF',
    phone: '(212)444-4441',
    creatorId: 156,
    id: 0,
    subject: '',
    description: '',
    dateCreated: null,
    status: '',
    productId: null,
    categoryId: null,
    priorityId: null
  };
}
