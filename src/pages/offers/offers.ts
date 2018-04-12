import { GeneralProvider } from './../../providers/general/general';
import { EventsProvider } from './../../providers/events/events';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
  Offers  : any
  displayLoading : boolean = true
  constructor(public navCtrl: NavController, 
    private eventService : EventsProvider,
    private generalService : GeneralProvider,
    public navParams: NavParams) {
      this.getOffers()
  }

  goToEvent(eventId){
    this.navCtrl.push('EventDetailsPage' , {eventId : eventId})
  }


  getOffers(){
    this.eventService.getOfferEvents().subscribe( data => {
      console.log('offers : ',data);
      this.Offers = data
      this.displayLoading = false
    })
  }

}
