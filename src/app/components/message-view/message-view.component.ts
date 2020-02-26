import { Component, OnInit } from '@angular/core';
import { TableFooDataSource, TableFooItem } from '../../table-foo/table-foo-datasource';
import { MessagesListDataSource } from '../../messages-list/messages-list-datasource';
import { MessagesService, messagesDataSource, MessagesListItem } from '../../_services/messages.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements OnInit {
  private msgDS;
  user: {
    id: number;
    name: string;
    email: string;
    title: string;
    dept: string;
    phone: string;
  };
  ticket = {
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
    selectedCategory: null
  };
  action: string;
  message: MessagesListItem;
  messageID: number;
  messageHeader: string;
  constructor(
    private _messageService: MessagesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.msgDS = TableFooDataSource;
    this.ticket['submittalDate'] = new Date();
    this.messageHeader = 'View Message';

    this.ticket.category.map((e) => {
      e['label']  = e.ticket_sub_cat_detail;
      e['value']  = e.id;
    });

    console.log('MessageViewComponent.constructor');
  }

  // ==========================================================================
  ngOnInit() {
    this.user = {
      id: 0,
      name: '',
      email: '',
      title: '',
      dept: '',
      phone: ''
    };
    this.messageID = +this.route.snapshot.paramMap.get('rowID') || 0;
    this.action = this.route.snapshot.paramMap.get('action') || 'new';

    console.log('MessageViewComponent.action:', this.action);
    if(this.action === 'new') {
      this.messageHeader = 'Open New Ticket';
    }
    if(this.action === 'view') {
      this.messageHeader = 'Ticket ID: ' + this.messageID;
      this._messageService.get(this.messageID)
      .subscribe((d) => {
        this.message = JSON.parse(JSON.stringify(d));
        console.log('===>', this.message);
        this.user.name = (this.message as any).from;
        this.user.title = (this.message as any).title;
        this.user.email = '';
        this.user.dept = '';
        this.user.phone = '';

        this.ticket.selectedProduct = this.ticket.products.find(i => i.label === this.message.product).value;
        this.ticket.selectedPriority = this.ticket.priority.find(i => i.label === this.message.priority).value;
        this.ticket.selectedCategory = this.ticket.category.find(i => i.ticket_sub_cat_detail === this.message.category);
        this.ticket.subject = this.message.subject;
        this.ticket.description = this.message.description;
        console.log('-->', this.ticket);
      });
    }
  
  }

  regetTicket(id) {
    console.log('MessageViewComponent.regetTicket', this.messageID);
    this._messageService.get(this.messageID).subscribe((d) => console.log('$$$', d));
  }
  submitTicket(f) {
    let user = this.user;
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
  deleteAttachment() {
    console.log('deleteAttachment');
  }
}
