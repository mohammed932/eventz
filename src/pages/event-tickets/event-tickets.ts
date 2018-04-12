import { GeneralProvider } from './../../providers/general/general';
import { TicketsProvider } from './../../providers/tickets/tickets';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-event-tickets',
  templateUrl: 'event-tickets.html',
})
export class EventTicketsPage {
  eventData : number
  Tickets : any
  displayLoading : boolean = true
  constructor(public navCtrl: NavController, 
    private ticketService : TicketsProvider,
    private generalService : GeneralProvider,
    public navParams: NavParams) {
      this.eventData = this.navParams.get('eventData')
      console.log('this.eventData : ',this.eventData);
      this.getEventTickets()
  }


  getEventTickets(){
    this.ticketService.getEventTickets(this.eventData['eventId']).subscribe( data => {
      console.log('tickets data : ',data);
      this.Tickets = data
      this.displayLoading = false
    })
  }



}
