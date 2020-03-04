import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../_models/user.model';
import { UserService } from '../../_services/user.service';

// import userLists from '../../../assets/data/usersList.json';

@Component({
  selector: 'app-choose-user',
  templateUrl: './choose-user.component.html',
  styleUrls: ['./choose-user.component.css']
})
export class ChooseUserComponent implements OnInit {
  users: Array<User>;
  currentUser: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _userService: UserService,

  ) {
    console.log('ChooseUserComponent.constructor');
    this.currentUser = null;
    sessionStorage.removeItem('user');
  }

  ngOnInit() {
    console.log('ChooseUserComponent.onInit');
    this._userService.allUsers().subscribe((d) => { console.log('^^^', d); this.users = d; } );
    console.log('ChooseUserComponent.usersLoaded', this.users);
  }

  chooseProfile(profile) {
    const self = this;

    profile = (profile || '').trim();
    switch (profile) {
      case 'Admin':
      case 'HelpdeskAdmin':
      case 'Helpdesk': {
        this.currentUser = <any>this.users.filter((u) =>
          u.role.includes(profile)
        );
        this.currentUser = this.currentUser[0];
        break;
      }
      default: {
        this.currentUser = null;
        break;
      }
    }
    console.log(`profile: "${profile}" - `, this.currentUser);
    sessionStorage.setItem('user', JSON.stringify(this.currentUser));
    if (this.currentUser) {
      this.router.navigate(['/listMessages']);
    }
  }
}
