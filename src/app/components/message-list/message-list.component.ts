import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesService, messagesDataSource, MessagesListItem } from '../../_services/messages.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
private loading = true;
public style = {
  table: 'border:3px solid red',
};
public messageSource = new messagesDataSource(this._messageService);
public messages;
public currentSelection;


  constructor(
    private _messageService: MessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.warn('MessageListComponent.constructor');
  }

  ngOnInit() {
    let self = this;

    console.log(this.messageSource.connect());
    this.loading = true;
    self._messageService.getMessagesP()
      .then((d) => {
        self.messages = d;
        self.loading = false;
      });
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


