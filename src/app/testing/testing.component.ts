import { Component, OnInit } from '@angular/core';

import { TestDialogComponent } from './test-dialog/test-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
id: number;
data = {
  project: ''
};

  constructor(public dialog: MatDialog) {
    this.id = Math.random();
    console.warn('TestingComponent.construct');
  }

  ngOnInit() {
  }

  getProject(d) {
    console.log('getProject.submit',this);
  }

  establishDialog(self) {
    console.log('establishDialog.click', this);
    const diagRef = this.dialog.open(TestDialogComponent, {
      data: this.data.project || 'TEST DATA'
    });

    diagRef.afterOpened().subscribe( (e) => {
      console.log('afterOpened', e);
    });

    diagRef.afterClosed().subscribe( (e) => {
      console.log('afterClosed', e);
    });
  }

  endDialog() {
    console.log('endDialog.click');
  }
  killAllDialog() {
    console.log('Kill, Kill, KILL!!!!!!!');
  }

  diagClose() {
    console.log('diagClose',this);
  }
  diagSave() {
    console.log('diagSave',this);
  }

}
