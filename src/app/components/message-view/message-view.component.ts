import { Component, OnInit } from '@angular/core';
import { TableFooDataSource, TableFooItem } from '../../table-foo/table-foo-datasource';
import { MessagesListDataSource } from '../../messages-list/messages-list-datasource';
import { MessagesService, messagesDataSource, MessagesListItem } from '../../_services/messages.service';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../_models/user.model';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements OnInit {
  private currentUser;
  private currentRole;
  private isAdmin;
  public appHasRole;
  public xxx;
  private ticket = {
    from: <User>{},
    action: '',
    status: 0,
    header: '',
    subject: '',
    description: '',
    data: {},
    products: [
      { value: null, label: '-- Product --' },
      { value: 1, label: 'AutoCAD' },
      { value: 2, label: 'General PC' },
      { value: 3, label: 'Parking Permit' },
      { value: 4, label: 'Printing' }
    ],
    selectedProduct:null,
    priority: [
      { value: null, label: '-- Priority --'},
      { value: 5, label: 'Request' },
      { value: 4, label: 'Low' },
      { value: 3, label: 'Standard' },
      { value: 2, label: 'High' },
      { value: 1, label: 'Critical' },
    ],
    selectedPriority: null,
    category: [
      { id: null, ticket_cat_id: 3, ticket_sub_cat_detail: '-- Category --' },
      { id: 31, ticket_cat_id: 3, ticket_sub_cat_detail: 'General Help' },
      { id: 32, ticket_cat_id: 3, ticket_sub_cat_detail: 'Software Issue' },
      { id: 33, ticket_cat_id: 3, ticket_sub_cat_detail: 'File Issue' },
      { id: 34, ticket_cat_id: 3, ticket_sub_cat_detail: 'Print Book' },
      { id: 35, ticket_cat_id: 3, ticket_sub_cat_detail: 'Other' },
      { id: 36, ticket_cat_id: 3, ticket_sub_cat_detail: 'Bucket List' }
    ],
    selectedCategory: null,
    selectedAttachment: null,
    submittalDate: null,
    submitLabel: 'Submit'
  };
  action: string;
  message: MessagesListItem;
  messageID: number;
  messageHeader: string;

  constructor(
    private _messageService: MessagesService,
    private _userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.ticket.submittalDate = new Date();
    this.messageHeader = 'View Message';

    this.currentUser = this._userService.currentUser();
    this.currentRole = this._userService.currentRole();

    this.ticket.category.map((e) => {
      e[`label`]  = e.ticket_sub_cat_detail;
      e[`value`]  = e.id;
    });

    console.log('MessageViewComponent.constructor', this);
  }

  // ==========================================================================
  ngOnInit() {
    this.isAdmin = this.currentRole.map(e => e.toLowerCase()).includes('admin');
    this.messageID = +this.route.snapshot.paramMap.get('rowID') || 0;
    this.action = this.route.snapshot.paramMap.get('action') || 'new';

    console.log('MessageViewComponent.action:', this.action);

    if ([' ', 'new'].indexOf(this.action) !== -1) {
      this.ticket.action = 'new';
      this.ticket.header = 'Open New Ticket';
      this.ticket.from = this.currentUser;
      this.ticket.from.email = this.currentUser.username + '@host.com';
    }
    if (this.action === 'view') {
      this.ticket.action = 'view';
      this._messageService.get(this.messageID)
      .subscribe((d) => {
        this.message = JSON.parse(JSON.stringify(d));
        console.log('===>', d);

        [this.ticket.from.firstName, this.ticket.from.lastName] = (this.message as any).from.split(' ');
        this.ticket.from.title = (this.message as any).title;
        this.ticket.from.email = '';
        this.ticket.from.dept = '';
        this.ticket.from.phone = '';

        this.ticket.status = this.message.status;
        this.ticket.header = `Ticket ID: ${this.messageID}`;
        // this.ticket.header += this.message.status ? ' |OPEN' : ' |(Closed)';


        this.ticket.selectedProduct = this.ticket.products.find(i => i.label === this.message.product).value;
        this.ticket.selectedPriority = this.ticket.priority.find(i => i.label === this.message.priority).value;
        this.ticket.selectedCategory = this.ticket.category.find(i => i.ticket_sub_cat_detail === this.message.category);

        this.ticket.subject = this.message.subject;
        this.ticket.description = this.message.description;
        console.log('-->', this.ticket);
      });
    }

  }

  hasAuth(role) {
    let ret = false;
    ret = this.currentRole.map(e => e.toLowerCase()).includes(role);
    //console.log('hasAuth:', this.currentRole, role, ret);

    return ret;
  }

  regetTicket(id) {
    console.log('MessageViewComponent.regetTicket', this.messageID);
    this._messageService.get(this.messageID).subscribe((d) => console.log('$$$', d));
  }

  submitTicket(f) {
    let user = this.currentUser;
    let ticket = this.ticket;

    console.group('submitTicket');
    console.log(f.form);
    console.log({user});
    console.log({ticket});

  }
  onBeforeSend(e) {
    console.log('onBeforeSend', e);
  }
  onBasicUpload(e) {
    console.log('onBasicUpload', e);
  }
  onBasicSelect(e) {
    console.log('onBasicSelect', e);
  }
  onBasicUploading(e) {
    console.log('uploading', e);
  }
  foo(e) {
    console.log('foo', e);
  }
  deleteAttachment(id) {
    console.log('deleteAttachment', id);
    console.log('deleteAttachment', event);

    return false;
  }
}
