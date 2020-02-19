import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map, tap } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import  messageList  from '../../assets/data/messagelist.json';

// TODO: Replace this with your own data model type
export interface TableFooItem {
  id: number;
  from: string,
  title: string,
  subject: string;
  description: string,
  category: string;
  priority: string,
  date:string
}

// TODO: replace this with real data from your application
const TICKETS:TableFooItem[] = [
  {id:100, from:'Fred Smith', title:'Landscape Architect', subject:'Having a problem displaying', description:'Something something eomsehting something else', category:'network', priority:'standard', date:'2-12-2020 12:12AM'},
  {id:101, from: 'James Quigley', title:'Planner', subject:'Display Probs', description:'Somthing went wrong with something or something did something', category:'video', priority:'important', date:'2-12-2020 13:12AM'},
  {id:102, from:'Mike Holmes', title:'contractor', subject:'Waterheater overheating', description:'He a was repairing a leaking bonus room above a garage, that of course was not done right in the first place, and he was on a ladder wiring a new receptacle for a garage door opener', category:'hardware', priority:'urgent', date:'2-12-2020 14:12AM'},
  {id:103, from: 'Fred SMith', title:'Lanscape Architect', subject:'NYC1 Network Mainenance', description:'During the above window, the networking team...', category:'network' ,priority:'low', date:'2-15-2020 12:12AM'}
];
/**
 * Data source for the TableFoo view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableFooDataSource extends DataSource<TableFooItem> {
  data:TableFooItem[];
  paginator: MatPaginator;

  /* constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }*/
  constructor() {
    super();
    this.data = messageList;
    console.log('TableFooDataSource.constructor:');
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
      observableOf(this.data)
    ];

    return merge(...dataMutations)
      .pipe(
      );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
    console.log('TableFooDataSources.disconnect');
  }

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
