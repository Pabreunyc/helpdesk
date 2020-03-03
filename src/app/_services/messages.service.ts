import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, delay, tap, find } from 'rxjs/operators';


// import messageList from '../../assets/data/messagelist_2.json';

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

@Injectable({ providedIn: 'root' })
export class MessagesService {

private DATA_API = 'http://localhost:4200/assets/data/messagelist_2.json';
public messages: MessagesListItem[];
public mq: Observable<any>;

  constructor(private http: HttpClient) {
    console.log('MessagesService.constructor');
  }

  get(id): Observable<any> {
    console.log('MessagesService.get', id);
    return this.getMessages().pipe(
      map(m => m.find(e => e.id == id))
    );
  }
  getMessages(): Observable<MessagesListItem[]> {
    return this.http.get<MessagesListItem[]>(this.DATA_API);
  }
  getMessagesP() {
    return this.http.get(this.DATA_API).pipe(
      delay(500))
      .toPromise()
      .then(res => res as MessagesListItem);
  }
}

export class messagesDataSource extends DataSource<any> {
  constructor(private _msgService: MessagesService) {
    super();
    console.warn('messagesDataSource.constructor');
  }

  get(id): Observable<MessagesListItem[]> {
    let o = this._msgService.getMessages();
    o.subscribe(e => console.log(e));
    return o;
  }

  connect(): Observable<MessagesListItem[]> {
    console.log('messagesDataSource.connect');
    return this._msgService.getMessages();
  }

  disconnect() {
    console.log('messagesDataSource.disconnect');
  }
}
