import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { PanelModule} from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule } from '@angular/material';
import { MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';

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
import { MessageViewComponent } from './components/message-view/message-view.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { ChooseUserComponent } from './components/choose-user/choose-user.component';

import { MessagesService } from './_services/messages.service';
import { UserService } from './_services/user.service';
import { HasRoleDirective } from './_directives/has-role.directive';

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
    TestDialogComponent,
    MessageViewComponent,
    MessageListComponent,
    ChooseUserComponent,
    HasRoleDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSidenavModule,
    FormsModule,
    MatInputModule,
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
    MatDividerModule,
    AppRoutingModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
    DropdownModule,
    FileUploadModule,
    CardModule,
    PanelModule,
    ButtonModule,
    SplitButtonModule

  ],
  providers: [MessagesService, UserService],
  entryComponents: [TestDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
