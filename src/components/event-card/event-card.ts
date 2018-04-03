import { NavController } from 'ionic-angular';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventsProvider } from '../../providers/events/events';
import * as moment from 'moment';

@Component({
  selector: 'event-card',
  templateUrl: 'event-card.html'
})
export class EventCardComponent {

  @Input() type
  @Input() event
  @Output() eventDetailsOutput: EventEmitter<any>
  data: any
  constructor(private navCtrl: NavController, private eventService: EventsProvider) {
    this.eventDetailsOutput = new EventEmitter()
  }

  goToEvent() {
    this.eventDetailsOutput.emit(this.event.id)
  }


  Wish(eventId) {
    this.event.wishing = 1
    this.eventService.wish(eventId).subscribe(data => {
      console.log('wish response : ', data);
      if (data['success']) {
        this.event.wishing = 1
      }
    })
  }
  unWish(eventId) {
    this.event.wishing = 0
    this.eventService.unwish(eventId).subscribe(data => {
      console.log('unwish response : ', data);
      if (data['success']) {
        this.event.wishing = 0
      }
    })
  }

  adjustSringStyle(str) {
    return str.split("\n").join("<br />");
  }

  sliceString(str) {
    return str.split(/\s+/).slice(0, 20).join(" ");
  }



  formatData(date, status) {
    let dataString = ``
    let dayName = moment(date).format('dddd')
    let monthName = moment(date).format('MMMM')
    let dayOfMonth = moment(date).format('D')
    let year = moment(date, "YYYY").year()
    let amPm = moment(date).format('hh:mm A')
    if (status == '0') return dataString = `${dayOfMonth} ${monthName} ${year}`
    else return dataString = `${amPm}`
  }



}
