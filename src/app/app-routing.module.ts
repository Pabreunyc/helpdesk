import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { TableFooComponent } from './table-foo/table-foo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'table', component: TableFooComponent },
  { path: 'foo', component: DashboardComponent },
  { path: 'testing', component: TestingComponent},
];

@ NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false}),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
