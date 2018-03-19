import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ticket-types',
  templateUrl: 'ticket-types.html',
})
export class TicketTypesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToTickets(type){
    this.navCtrl.push('TicketsPage',{ticket_type : type})
  }
}
