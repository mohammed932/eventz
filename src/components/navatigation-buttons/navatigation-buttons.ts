import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
@Component({
  selector: 'navatigation-buttons',
  templateUrl: 'navatigation-buttons.html'
})
export class NavatigationButtonsComponent {


  constructor(private navCtrl : NavController , private modalCtrl : ModalController) {
  }

  goToNotification(){
    this.navCtrl.push('NotificationsPage')
  }

  search(){
    console.log("search")
    this.modalCtrl.create('SearchPage').present()
  }

}
