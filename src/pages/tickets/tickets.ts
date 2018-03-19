import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {
  ticket_type : string
  Tickets : any [] = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ticket_type = this.navParams.get('ticket_type')

    for (let i = 0; i < 10; i++) {
      this.Tickets.push(i)
    }
  }

 
}
