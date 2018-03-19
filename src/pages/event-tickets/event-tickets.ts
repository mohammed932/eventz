import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-event-tickets',
  templateUrl: 'event-tickets.html',
})
export class EventTicketsPage {
  Tickets : any [] = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 10; i++) {
     this.Tickets.push(i)
    }
  }


}
