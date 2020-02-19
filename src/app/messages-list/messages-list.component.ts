import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MessagesListDataSource } from './messages-list-datasource';
import { MessagesListItem } from './messages-list-datasource';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css'],
  providers: [MessagesListDataSource]
})
export class MessagesListComponent implements OnInit, AfterViewInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  elements: MessagesListItem[];

  constructor(private messageSource: MessagesListDataSource) {
    console.log('...');
    console.log(messageSource);
  }

  ngOnInit() {
    console.log('MessagesListComponent.OnInit');
    this.elements = this.messageSource.data;
  }

  ngAfterViewInit() {
    console.log('MessagesListComponent.AfterViewInit');
  }
}
