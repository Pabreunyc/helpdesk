import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { CommsService } from '../../../_services/comms.service';
import { tap, map  } from 'rxjs/operators';
import { HelpdeskTicket } from '../../../_models/helpdesk_ticket';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
// @Input() msgIn: number;
// @Output() msgOut = new EventEmitter<number>();

private tableData;
private currentSelection;
public ticketsDS: HelpdeskTicket[];
public gooRequest = new EventEmitter<number>();

  constructor( private commsService: CommsService ) {
    console.log('Child1Component.constructor');
    this.commsService.getTicketList()
    .subscribe(
      (data: HelpdeskTicket[]) => {
        console.log('Child1Component', data);
        this.ticketsDS = data;
      }
    );
  }

  ngOnInit() {
    console.log('Child1Component.onInit');
    // console.log(this.commsService.getTicketList().subscribe( v => console.log(v)));
  }
  ngOnDestroy() {
    console.log('Child1Component.DESTROY');

  }
  selectTicket(evt) {
    let ticket = evt.data;
    console.log('Child1Component.selectTicket', typeof evt, evt);
    //this.commsService.setCurrentTicket(ticket.id);
    this.commsService.emit(new CustomEvent('selectTicket', {detail: evt.data.id}));
  }
  unselectRow(evt) {
    console.log('Child1Component.unSelectRow', evt);
    this.commsService.emit(new CustomEvent('unselectTicket', {detail: null}));
  }

  clickMe(evt) {
    console.log('ClickMe', evt);
    this.gooRequest.emit(Math.random());
  }
}
