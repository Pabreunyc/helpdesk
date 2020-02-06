import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';

import { MainNavComponent } from './main-nav/main-nav.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MlistComponent } from './mlist/mlist.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './_shared/header.component';
import { HomeComponent } from './home/home.component';
import { TableFooComponent } from './table-foo/table-foo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MessagesListComponent,
    DashboardComponent,
    MlistComponent,
    HeaderComponent,
    HomeComponent,
    TableFooComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
