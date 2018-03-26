import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'event-card',
  templateUrl: 'event-card.html'
})
export class EventCardComponent {

  @Input() type

  constructor(private navCtrl: NavController ) {
 
  }

  goToEvent(){
      this.navCtrl.push('EventDetailsPage')
  }

}
