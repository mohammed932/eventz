import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-wishing',
  templateUrl: 'wishing.html',
})
export class WishingPage {
  events : any [] = []
  type = "event"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 3; i++) this.events.push(i)
  }


}
