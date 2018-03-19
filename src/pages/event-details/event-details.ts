import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }

  goToOrgnaizer(){
    this.navCtrl.push('OrganizerDetailsPage')
  }

  eventTickets(){
    this.navCtrl.push('EventTicketsPage')
  }

}
