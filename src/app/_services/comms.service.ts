import { Injectable } from '@angular/core';

import { Observable, Subject, BehaviorSubject, timer, of, from, Subscription } from 'rxjs';
import { map, tap, delay, find, share, filter } from 'rxjs/operators';

import { HelpdeskTicket } from '../_models/helpdesk_ticket';
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

private TICKET_STORE = 'tickets'
private _ticketList: BehaviorSubject<HelpdeskTicket[]>;
private _selectedTicket$: Subject<HelpdeskTicket> = new Subject();

  constructor() {
    console.log('CommsService.constructor');
    let t = <HelpdeskTicket[]>JSON.parse(sessionStorage.getItem(this.TICKET_STORE));
    this._ticketList = new BehaviorSubject(t);
    console.table(t);
  }

  getTicketList() {
    return this._ticketList.asObservable().pipe(delay(1000));
  }
  getTicket(id) {
    let ret: HelpdeskTicket[];

    console.log('CommsService.getTicket', id);
    this._ticketList.subscribe((v) => {
      console.log(v);
      ret = v.filter(x => {
        console.log('::', id, x);
        x.id === id;
      });
      console.log('ret', ret);
    });

  }
  saveTickets(ticket) {
    console.log('Saving Ticket', ticket);
    let maxId = 1;
    let t = JSON.parse(sessionStorage.getItem(this.TICKET_STORE)) || [];

    for(let i=0; i<t.length; i++) {
      maxId = Math.max(t[i].id, maxId);
    }
    ticket.id = ++maxId;
    t.push(ticket);
    sessionStorage.setItem(this.TICKET_STORE, JSON.stringify(t));

    this._ticketList.next(t);
    return true;
  }

  emit(evt) {
    console.log('CommsService.emit', evt);
    this._selectedTicket$.next(evt);
  }
  on(eventName: string, action: any): Subscription {
    console.log('CommsService.on', eventName, action);
    return this._selectedTicket$.subscribe(action);
  }
  setCurrentTicket(ticketID) {
    console.log('CommsService.currentTicket', ticketID);
    this.emit({name:'Major', data:ticketID});
  }
  // --------------------------------------------------------------------------
  getAllHeroes() {
    let tickets: HelpdeskTicket[];

    console.log('CommsService.getAllHeroes');
    return JSON.parse(localStorage.getItem('heroes'));
  }

  getHero(id) {
    console.log('CommsService.getHero', id);
    let m = this.tableData.filter(i => i.id==id);
    console.log('getHero',id, m);

    return m[0];
  }
}
