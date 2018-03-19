import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  town : any = "-1"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nextStep(){
    this.navCtrl.push('RegistrationMethodsPage')
  }

}
