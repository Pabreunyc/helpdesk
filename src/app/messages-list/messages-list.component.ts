import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MessagesListDataSource, MessagesListItem } from './messages-list-datasource';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit, AfterViewInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  elements: MessagesListItem[];

  constructor(private messageSource:MessagesListDataSource) {
    console.log(messageSource);
  }

  ngOnInit() {
    console.log('MessagesListComponent.OnInit');
    console.log(MessagesListDataSource);
  }

  ngAfterViewInit() {
    console.log('MessagesListComponent.AfterViewInit');
  }
}
