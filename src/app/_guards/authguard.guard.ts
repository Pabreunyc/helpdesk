import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) {
    console.log('AuthguardGuard.constructor');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const allowedRoles = next.data.allowedRoles;

    console.group('=====> AuthguardGuard.canActivate <=====');
    console.log('next:', next); console.log('state:', state);
    console.groupEnd();

    if(sessionStorage.getItem('user')) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('==> AuthguardGuard.canActivateChild');
    return true;
  }
}
