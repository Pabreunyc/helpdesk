import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import userLists from '../../../assets/data/usersList.json';

@Component({
  selector: 'app-choose-user',
  templateUrl: './choose-user.component.html',
  styleUrls: ['./choose-user.component.css']
})
export class ChooseUserComponent implements OnInit {
  users: object[];
  currentUser: object;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log('ChooseUserComponent.constructor');
    this.currentUser = null;
  }

  ngOnInit() {
    console.log('ChooseUserComponent.onInit', userLists);
    this.users = userLists;
  }

  chooseProfile(profile) {
    const self = this;

    profile = (profile || '').trim();
    switch (profile) {
      case 'Admin':
      case 'HelpdeskAdmin':
      case 'Helpdesk': {
        this.currentUser = this.users.filter((u) =>
          (u as any).role.includes(profile)
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
    if (this.currentUser) {
      sessionStorage.setItem('user', JSON.stringify(this.currentUser));
      this.router.navigate(['/listMessages']);
    }
  }
}
