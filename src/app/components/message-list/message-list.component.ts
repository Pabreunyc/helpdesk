import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MessagesService, messagesDataSource, MessagesListItem } from '../../_services/messages.service';
import { UserService } from '../../_services/user.service';

import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {
private loading = true;
private subscriptions: Array<Subscription>;

public style = {
  table: 'border:3px solid red',
};
private currentUser;
private currentRole;

public messageSource = new messagesDataSource(this._messageService);
public messages: MessagesListItem[];
public currentSelection;

  constructor(
    private _messageService: MessagesService,
    private _userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.warn('MessageListComponent.constructor');
    this.subscriptions = [];
    this.currentUser = _userService.currentUser();
    this.currentRole = _userService.currentRole();
  }

  ngOnInit() {
    let tmp;
    let fullname = `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    const  self = this;
    const userFrom = this.currentUser.firstName + ' ' + this.currentUser.lastName;
    this.loading = true;

    tmp = this._messageService.getMessages().subscribe((d) => {
      console.log('MessageListComponent._messageService.getMessages');
      console.log('&&', this.currentRole, this.currentRole.includes('Helpdesk'));

      if(this.currentRole.includes('Helpdesk'))
        this.messages = d.filter(m => m.from === fullname);
      else
        this.messages = d;

      this.loading = false;
    });
    this.subscriptions.push(tmp);
    tmp = null;

  }
  ngOnDestroy() {
    console.log('MessageListComponent.onDestroy', this.subscriptions);
    this.subscriptions.map(s => s.unsubscribe());
  }

  getDetails(evt) {
    console.log('getDetails', evt.data);
    this.router.navigate(['/viewMessage/view/' + evt.data.id]);
  }

  getData(event) {
    console.log('click.get', event);
    //console.log('MessageListComponent', this.messageSource.get());
    //this.messages = this.messageSource.get();
  }
}


