import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements OnInit {
  user: {
    name: string;
    email: string;
    title: string;
    dept: string;
    phone: string;
  };
  ticket: object = {
    products: [
      { value: null, label: '-- Product --' },
      { value: 1, label: 'AutoCAD' },
      { value: 2, label: 'General PC' },
      { value: 3, label: 'Parking Permit' },
      { value: 4, label: 'Printing' }
    ],
    priority: [
      { value: null, label: '-- Priority --'},
      { value: 1, label: 'Critical' },
      { value: 2, label: 'High' },
      { value: 3, label: 'Standard' },
      { value: 4, label: 'Low' },
      { value: 5, label: 'Request' }
    ],
    category: [
      { id: null, ticket_cat_id: 3, ticket_sub_cat_detail: '-- Category --' },
      { id: 31, ticket_cat_id: 3, ticket_sub_cat_detail: 'General Help' },
      { id: 32, ticket_cat_id: 3, ticket_sub_cat_detail: 'Software Issue' },
      { id: 33, ticket_cat_id: 3, ticket_sub_cat_detail: 'File Issue' },
      { id: 34, ticket_cat_id: 3, ticket_sub_cat_detail: 'Print Book' },
      { id: 35, ticket_cat_id: 3, ticket_sub_cat_detail: 'Other' },
      { id: 36, ticket_cat_id: 3, ticket_sub_cat_detail: 'Bucket List' }
    ]
  };
  constructor() {
    this.ticket['submittalDate'] = new Date();

    this.ticket.category.map((e) => {
      e['label']  = e.ticket_sub_cat_detail;
      e['value']  = e.id;
    });
    console.log(this.ticket.category);
  }

  // ==========================================================================
  ngOnInit() {
    this.user = {
      name: 'Reed Richards',
      email: 'rr@ff4.org',
      title: 'Mr. Fantastic',
      dept: '',
      phone: '212-444-4441'
    };
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
