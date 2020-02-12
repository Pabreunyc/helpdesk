import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { TableFooDataSource, TableFooItem } from './table-foo-datasource';

@Component({
  selector: 'app-table-foo',
  templateUrl: './table-foo.component.html',
  styleUrls: ['./table-foo.component.css']
})
export class TableFooComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableFooItem>;
  dataSource: TableFooDataSource;
  selection: TableFooItem;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'from', 'subject', 'category', 'date', 'actions'];
  alphabet;

  ngOnInit() {
    this.dataSource = new TableFooDataSource();
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.table.dataSource = this.dataSource;
  }

  tableRowClick(row) {
    console.log('tableRowClick.click', row, event);
  }
}
