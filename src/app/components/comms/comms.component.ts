import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';

import { HelpdeskTicket } from '../../_models/helpdesk_ticket';
import { CommsService } from '../../_services/comms.service';

@Component({
  selector: 'app-comms',
  templateUrl: './comms.component.html',
  styleUrls: ['./comms.component.css']
})
export class CommsComponent implements OnInit {
private action = 'new';
private selectedHero;
private selected = { product:null, category:null, priority:null };
private dateSubmitted;
public toOut: number;
public ticket:  HelpdeskTicket;
public ticketList: HelpdeskTicket[];

  constructor( private commsService: CommsService) {
    console.log('CommsComponent.constructor');
    console.log('>>', (this.toOut = Math.random()));
    this.ticket = resetTicket();
    this.ticketList = [];
  }

  ngOnInit() {
    console.log('CommsComponent.onInit');
    this.ticket.id = 666;
    this.ticket.creatorId = 4;
    this.ticket.title = 'Invisible Woman';
    this.ticket.department = 'FF';
    this.ticket.phone = '(212)444-4442';

    this.commsService.on('Major', this.showTicket);
  }

  getDetails(evt) {
    console.log('getDetails', evt);
    this.selectedHero = this.commsService.getHero(evt);
    console.log('&&&', this.selectedHero);
  }

  submitForm(d) {
    //  submit
    console.log('submitForm', this.ticket, this.selected);


    //this.ticket.id = counter;
    this.ticket.status = 'open';
    this.ticket.dateCreated = new Date().toString();

    this.ticket.productId = this.selected.product;
    this.ticket.categoryId = this.selected.category;
    this.ticket.priorityId = this.selected.priority;

    this.commsService.saveTickets(this.ticket);

    this.selected = { product:null, category:null, priority:null };
    this.ticket = resetTicket();
  }

  showTicket(id) {
    console.log('FOO', id);
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
