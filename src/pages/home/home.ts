import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  events : any [] = []
  type = "event"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 10; i++)
     this.events.push(i)
  }

  editFavoriate(){
    this.navCtrl.push('ChooseFavoriteCategoryPage')
  }

  goToDetails(){
    this.navCtrl.push('EventDetailsPage')
  }

  
}
