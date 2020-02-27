import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-user',
  templateUrl: './choose-user.component.html',
  styleUrls: ['./choose-user.component.css']
})
export class ChooseUserComponent implements OnInit {

  constructor() {
    console.log('ChooseUserComponent.constructor');
  }

  ngOnInit() {
    console.log('ChooseUserComponent.onInit');
  }

  chooseProfile(profile) {
    profile = (profile || '').trim().toLowerCase();
    console.log(`profile: "${profile}"`);

  }
}
