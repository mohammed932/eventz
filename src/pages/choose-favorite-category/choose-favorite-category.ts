import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-choose-favorite-category',
  templateUrl: 'choose-favorite-category.html',
})
export class ChooseFavoriteCategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  home(){
    this.navCtrl.push('MainTopTabsPage')
  }

}
