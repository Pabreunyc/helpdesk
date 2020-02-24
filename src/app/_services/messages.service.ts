import { Injectable } from '@angular/core';

import messageList from '../../assets/data/messagelist_2.json';

export interface MessagesListItem {
  id: number;
  from: string;
  title: string;
  subject: string;
  description: string;
  product: string;
  category: string;
  priority: string;
  date: string;
  status: number;
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
messages: MessagesListItem[];
  constructor() {
    this.messages = messageList;
    console.log('MessagesService.constructor', this.messages);
  }

  getMessages() {
    return this.messages;
  }
}