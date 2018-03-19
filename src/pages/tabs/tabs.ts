import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root : string = "InboxPage"
  tab2Root : string = "ChannelPage"
  tab3Root : string = "ProfilePage"
  tab4Root : string = "ProfilePage"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

 

}
