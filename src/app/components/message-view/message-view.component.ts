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
  constructor() { }

  ngOnInit() {
    this.user = {
      name: 'Reed Richards',
      email: 'rr@ff4.org',
      title: 'Mr. Fantastic',
      dept: 'Science',
      phone: '212-444-4441'
    };
  }

  submitTicket(e) {
    console.log('submitTicket', e);
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
}
