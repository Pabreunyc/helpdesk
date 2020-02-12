import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog,  } from '@angular/material';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.css']
})
export class TestDialogComponent implements OnInit {

  constructor(
    public diagRef: MatDialogRef<TestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message:string 
  ) {
    console.warn('TestDialogComponent.constructor');
  }

  ngOnInit() {
    console.log('TestDialogComponent.onInit');
  }

  onNoClick(): void {
    console.log('TestDialogComponent.onNoClick', this);
    this.diagRef.close();
  }
}
