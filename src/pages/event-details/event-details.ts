import { GeneralProvider } from './../../providers/general/general';
import { EventsProvider } from './../../providers/events/events';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
  eventId: number
  eventDetails: any
  displayLoading: boolean = true
  constructor(public navCtrl: NavController,
    private eventService: EventsProvider,
    private genralService: GeneralProvider,
    private storage: Storage,
    public navParams: NavParams) {
    this.eventId = this.navParams.get('eventId')
    this.getEventDetails()
  }


  goToOrgnaizer() {
    console.log('this.eventDetails.id : ', this.eventDetails.id);

    this.navCtrl.push('OrganizerDetailsPage', {
      organizerId: this.eventDetails.organizer_id,
      eventId: this.eventDetails.id
    })
  }

  eventTickets() {
    let eventData = {
      eventName: this.eventDetails.title,
      eventId: this.eventDetails.id
    }
    this.navCtrl.push('EventTicketsPage', { eventData })
  }


  getEventDetails() {
    this.eventService.getEventDetails(this.eventId).subscribe(data => {
      this.eventDetails = data
      this.displayLoading = false
      console.log('this.eventDetails : ', this.eventDetails);
    })
  }

  adjustSringStyle(str) {
    return str.split("\n").join("<br/>");
  }

  async Like() {
    if (await this.storage.get('isLogin')) {
      this.eventDetails.liked = 1
      this.eventService.like(this.eventId).subscribe(data => {
        console.log('like response : ', data);
        if (data['success']) {
          this.eventDetails.liked = 1
        }
      })
    } else {
      this.genralService.showAlert('You must login first')
    }
  }

  async unLike() {
    if (await this.storage.get('isLogin')) {
      this.eventDetails.liked = 0
      this.eventService.dislike(this.eventId).subscribe(data => {
        console.log('dislike response : ', data);
        if (data['success']) {
          this.eventDetails.liked = 0
        }
      })
    } else {
      this.genralService.showAlert('You must login first')
    }
  }

  async Wish(eventId) {
    if (await this.storage.get('isLogin')) {
      this.eventDetails.wishing = 1
      this.eventService.wish(eventId).subscribe(data => {
        console.log('wish response : ', data);
        if (data['success']) {
          this.eventDetails.wishing = 1
        }
      })
    } else {
      this.genralService.showAlert('You must login first')
    }
  }
  async unWish(eventId) {
    if (await this.storage.get('isLogin')) {
      this.eventDetails.wishing = 0
      this.eventService.unwish(eventId).subscribe(data => {
        console.log('unwish response : ', data);
        if (data['success']) {
          this.eventDetails.wishing = 0
        }
      })
    } else {
      this.genralService.showAlert('You must login first')
    }
  } 


  openMap() {
    let lanLng = {
      lat: this.eventDetails.location_lat,
      lng: this.eventDetails.location_long
    }
    this.navCtrl.push('MapPage', { lanLng })
  }
}
