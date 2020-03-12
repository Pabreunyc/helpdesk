import { Injectable } from '@angular/core';

import { Observable, Subject, BehaviorSubject, timer, of, from, Subscription } from 'rxjs';
import { map, tap, delay, find, filter, share, toArray } from 'rxjs/operators';

import { HelpdeskTicket } from '../_models/helpdesk_ticket';
import { EventEmitter } from 'events';
@Injectable({
  providedIn: 'root'
})

export class CommsService {
private tableData = [
  {id:200, name:'Sue Storm', title:'Invisible Woman', power:9000 },
  {id:100, name:'Reed Richards', title:'Mr. Fantastic', power:8000 },
  {id:300, name:'Johnny Storm', title:'Human Torch', power:7000 },
  {id:400, name:'Ben Grimm', title:'The Thing', power:9200 }
];

private TICKET_STORE = 'tickets';
private ticketList;
private _ticketList: BehaviorSubject<[]>;
public _selectedTicket$: Subject<CustomEvent> = new Subject();

  constructor() {
    console.log('CommsService.constructor');

    this.ticketList = JSON.parse(localStorage.getItem(this.TICKET_STORE)) || [];
    this._ticketList = new BehaviorSubject(this.ticketList);
    console.table(this.ticketList);
  }

  getTicketList():Observable<HelpdeskTicket[]> {
    return this._ticketList.asObservable().pipe(delay(1000));
  }

  // ==========================================================================
  getTicket(id):any {
    console.log('CommsService.getTicket', id);

    let ticket = this.ticketList.find(t => t.id === id);
    ticket = ticket ? ticket : null;

    console.log('list', this.ticketList, ticket);
    return of(ticket).pipe(delay(1000));
  }

  findTicket(list, id) {
    console.log('findTicket', list, id);

    let r = list.filter(v => v.id === id);
    console.log(r);
  }

  saveTickets(ticket) {
    console.log('Saving Ticket', ticket);
    let maxId = 1;
    // let t = JSON.parse(localStorage.getItem(this.TICKET_STORE)) || [];

    for(let i=0; i<this.ticketList.length; i++) {
      maxId = Math.max(this.ticketList[i].id, maxId);
    }
    ticket.id = ++maxId;
    this.ticketList.push(ticket);
    localStorage.setItem(this.TICKET_STORE, JSON.stringify(this.ticketList));

    this._ticketList.next(this.ticketList);
    // return true;
  }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  emit(evt: CustomEvent) {
    console.log('CommsService.emitIn', evt);
    let e = new CustomEvent('selectTicket', {detail: evt.detail});
    console.log('emitting', e);
    this._selectedTicket$.next(e);
  }
  on(eventName: string, action: any): Subscription {
    console.log('CommsService.on', eventName, action);
    return this._selectedTicket$.subscribe(action);
  }

  setCurrentTicket(ticketID) {
    console.log('CommsService.currentTicket', ticketID);
    // this.emit({name:'Major', data:ticketID});
  }
  // --------------------------------------------------------------------------
}
