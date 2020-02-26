import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map, tap } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { MessagesService, MessagesListItem } from '../_services/messages.service';
import messageList from '../../assets/data/messagelist_2.json';

// TODO: Replace this with your own data model type
export interface TableFooItem {
  id: number;
  from: string;
  title: string;
  subject: string;
  description: string;
  category: string;
  priority: string;
  date: string;
  status: number;
}

// TODO: replace this with real data from your application
const TICKETS: TableFooItem[] = [];
/**
 * Data source for the TableFoo view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableFooDataSource extends DataSource<TableFooItem> {
  private _messagesService;
  data: TableFooItem[];

  /* constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }*/
  constructor(private paginator: MatPaginator) {
    super();
    this.data = messageList;
    // this._messagesService = new MessagesService();

    console.log('TableFooDataSource.constructor:');
    console.log(this._messagesService.getMessages());
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableFooItem[]> {
    console.log('TableFooDataSources.Connect');
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page
    ];

    this.paginator.length = this.data.length;
    return merge(...dataMutations)
      .pipe(
        map(() => {
          return this.getPagedData(this.data);
        })
      );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
    console.log('TableFooDataSources.disconnect');
  }

  public getDataRow(row: number) {
    console.log('TableFooDataSource.getData', row);
    return row[row];
  }

  private getPagedData(data: any[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    console.log('--', startIndex, this.paginator.pageSize);
    return data.slice(startIndex, startIndex + this.paginator.pageSize);
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
