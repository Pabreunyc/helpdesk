import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../_services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _messageService: MessagesService) {
    console.warn('HomeComponent.constructor');
    console.log('-->', this._messageService);
  }

  ngOnInit() {
  }

}
