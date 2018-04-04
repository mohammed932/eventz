import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main-top-tabs',
  templateUrl: 'main-top-tabs.html',
})
export class MainTopTabsPage {
  tab1Root : string = "HomePage"
  tab2Root : string = "TicketTypesPage"
  // tab3Root : string = "FavoritesPage"
  tab4Root : string = "OffersPage"
  // tab5Root : string = "UserInterestsPage"
  constructor(public navCtrl: NavController) {
  }



}
