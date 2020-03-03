import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, delay, tap, find } from 'rxjs/operators';

import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private DATA_API = 'http://localhost:4200/assets/data/usersList.json';

  constructor(private http: HttpClient) {
    console.log('UserService.constructor');
  }

  currentUser(): User {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  allUsers(): Observable<User[]> {
    let users$;
    console.log('userService.allUsers');
    users$ = this.http.get<User[]>(this.DATA_API).pipe(
      delay(500),
      tap((e) => console.log('userService.tap', e))
    );

    return users$;
  }
}
