import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
  Offers  : any [] = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     for (let i = 0; i < 10; i++) {
       this.Offers.push(i)
     }
  }


}
