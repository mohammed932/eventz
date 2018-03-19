import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-organizer-details',
  templateUrl: 'organizer-details.html',
})
export class OrganizerDetailsPage {
  events : any [] = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 10; i++)
     this.events.push(i)
  }

}
