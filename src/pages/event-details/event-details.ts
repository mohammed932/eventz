import { EventsProvider } from './../../providers/events/events';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
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
    public navParams: NavParams) {
    this.eventId = this.navParams.get('eventId')
    this.getEventDetails()
  }

  formatData(date, status) {
    let dataString = ``
    let dayName = moment(date).format('dddd')
    let monthName = moment(date).format('MMMM')
    let dayOfMonth = moment(date).format('D')
    let amPm = moment(date).format('hh:mm A')
    if (status == '0') return dataString = `${dayName} , ${monthName} ${dayOfMonth}`
    else return dataString = `${amPm} EST`
  }

  goToOrgnaizer() {
    console.log('this.eventDetails.id : ',this.eventDetails.id);
    
    this.navCtrl.push('OrganizerDetailsPage', { 
      organizerId: this.eventDetails.organizer_id ,
      eventId : this.eventDetails.id
    })
  }

  eventTickets() {
    this.navCtrl.push('EventTicketsPage')
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

  Like() {
    this.eventDetails.liked = 1
    this.eventService.like(this.eventId).subscribe(data => {
      console.log('like response : ', data);
      if (data['success']) {
        this.eventDetails.liked = 1
      }
    })
  }

  unLike() {
    this.eventDetails.liked = 0
    this.eventService.dislike(this.eventId).subscribe(data => {
      console.log('dislike response : ', data);
      if (data['success']) {
        this.eventDetails.liked = 0
      }
    })
  }

  Wish(eventId) {
    this.eventDetails.wishing = 1
    this.eventService.wish(eventId).subscribe(data => {
      console.log('wish response : ', data);
      if (data['success']) {
        this.eventDetails.wishing = 1
      }
    })
  }
  unWish(eventId) {
    this.eventDetails.wishing = 0
    this.eventService.unwish(eventId).subscribe(data => {
      console.log('unwish response : ', data);
      if (data['success']) {
        this.eventDetails.wishing = 0
      }
    })
  }
}
