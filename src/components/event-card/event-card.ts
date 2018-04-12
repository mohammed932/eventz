import { GeneralProvider } from './../../providers/general/general';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventsProvider } from '../../providers/events/events';
@Component({
  selector: 'event-card',
  templateUrl: 'event-card.html'
})
export class EventCardComponent {

  @Input() type
  @Input() event
  @Output() eventDetailsOutput: EventEmitter<any>
  data: any
  constructor(private navCtrl: NavController,
    private genralService: GeneralProvider,
    private storage: Storage,
    private eventService: EventsProvider) {
    this.eventDetailsOutput = new EventEmitter()
  }

  goToEvent() {
    this.eventDetailsOutput.emit(this.event.id)
  }

  

  getEventTitle(event){
    if (event.hasOwnProperty('title')) {
      return event.title
    } else if (event.hasOwnProperty('event_title')) {
      return event.event_title
    }
  }



}
