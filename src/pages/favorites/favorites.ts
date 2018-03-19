import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  segmetType : string = 'events'
  type = "event"
  Organizers : any [] =[]
  Events : any [] = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 10; i++) {
      this.Organizers.push(i)
      this.Events.push(i)
    }
  }


}
