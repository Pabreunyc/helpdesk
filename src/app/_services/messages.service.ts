import { Injectable } from '@angular/core';

import messageList from '../../assets/data/messagelist.json';

export interface MessagesListItem {
  name: string;
  id: number;
  symbol: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() {
  }
}
