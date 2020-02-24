import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map, tap } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { MessagesService } from '../_services/messages.service';

// TODO: Replace this with your own data model type
export interface MessagesListItem {
  name: string;
  id: number;
  symbol: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MessagesListItem[] = [
  {id: 1,  symbol: '', name: 'Hydrogen'},
  {id: 2,  symbol: '', name: 'Helium'},
  {id: 3,  symbol: '', name: 'Lithium'},
  {id: 4,  symbol: '', name: 'Beryllium'},
  {id: 5,  symbol: '', name: 'Boron'},
  {id: 6,  symbol: '', name: 'Carbon'},
  {id: 7,  symbol: '', name: 'Nitrogen'},
  {id: 8,  symbol: '', name: 'Oxygen'},
  {id: 9,  symbol: '', name: 'Fluorine'},
  {id: 10, symbol: '',  name: 'Neon'},
  {id: 11, symbol: '',  name: 'Sodium'},
  {id: 12, symbol: '',  name: 'Magnesium'},
  {id: 13, symbol: '',  name: 'Aluminum'},
  {id: 14, symbol: '',  name: 'Silicon'},
  {id: 15, symbol: '',  name: 'Phosphorus'},
  {id: 16, symbol: '',  name: 'Sulfur'},
  {id: 17, symbol: '',  name: 'Chlorine'},
  {id: 18, symbol: '',  name: 'Argon'},
  {id: 19, symbol: '',  name: 'Potassium'},
  {id: 20, symbol: '',  name: 'Calcium'},
];

/**
 * Data source for the MessagesList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MessagesListDataSource extends DataSource<MessagesListItem> {
  data: MessagesListItem[] = EXAMPLE_DATA;

  constructor() {
    super();
    this.data.map(function(e) {
      e.symbol = e.name[0];
    });
    console.log('MessagesListDataSource.construct', this.data);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MessagesListItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
    ];
    console.log('MessagesListDataSource.connect', this.data);

    return merge(...dataMutations).pipe();
    /*
    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
    */
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
    console.log('MessagesListDataSource.disconnect');
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */

   /*
  private getPagedData(data: MessagesListItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }
  */

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  /*
  private getSortedData(data: MessagesListItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
  */
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
