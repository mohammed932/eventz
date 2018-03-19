import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main-top-tabs',
  templateUrl: 'main-top-tabs.html',
})
export class MainTopTabsPage {
  tab1Root : string = "HomePage"
  tab2Root : string = "TicketTypesPage"
  tab3Root : string = "FavoritesPage"
  tab4Root : string = "OffersPage"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
