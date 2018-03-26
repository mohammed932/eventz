import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-choose-favorite-category',
  templateUrl: 'choose-favorite-category.html',
})
export class ChooseFavoriteCategoryPage {
  cats : any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cats = {
      marketing : false,
      art : false,
      softtware : false,
      science : false,
      community : false,
      music : false
    }
  }

  home(){
    this.navCtrl.push('MainTopTabsPage')
  }

}
