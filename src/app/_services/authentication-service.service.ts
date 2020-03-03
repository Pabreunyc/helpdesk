import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, delay, tap, find } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
}
