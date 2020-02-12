import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from "@angular/flex-layout";

import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule } from '@angular/material';
import { MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MlistComponent } from './mlist/mlist.component';
import { HeaderComponent } from './_shared/header.component';
import { TableFooComponent } from './table-foo/table-foo.component';
import { TestingComponent } from './testing/testing.component';
import { TestDialogComponent } from './testing/test-dialog/test-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MessagesListComponent,
    DashboardComponent,
    MlistComponent,
    HeaderComponent,
    HomeComponent,
    TableFooComponent,
    TestingComponent,
    TestDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [TestDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
