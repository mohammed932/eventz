import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketsProvider } from '../../providers/tickets/tickets';

@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {
  ticket_type : string
  Tickets : any
  displayLoading : boolean = true
  constructor(public navCtrl: NavController, 
    private ticketService : TicketsProvider,
    public navParams: NavParams) {
    this.ticket_type = this.navParams.get('ticket_type')
    console.log('this.ticket_type : ',this.ticket_type);
    if(this.ticket_type == 'free'){
      this.getFreeTickets()
    }else if(this.ticket_type == 'myTickets'){
      this.getMyTickets()
    }
  }

 
  getFreeTickets(){
      this.ticketService.getFreeTickets().subscribe( data => {
        this.Tickets = data
        this.displayLoading = false
        console.log('free tickets : ',data);
      })
  }


  getMyTickets(){
    this.ticketService.getMyTickets().subscribe( data => {
      this.Tickets = data
      this.displayLoading = false
      console.log('my user tickets : ', data);
      
    })
  }

}
