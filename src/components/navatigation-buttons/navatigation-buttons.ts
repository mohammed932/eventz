import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'navatigation-buttons',
  templateUrl: 'navatigation-buttons.html'
})
export class NavatigationButtonsComponent {


  constructor(private navCtrl : NavController) {
  }

  goToNotification(){
    this.navCtrl.push('NotificationsPage')
  }


}
