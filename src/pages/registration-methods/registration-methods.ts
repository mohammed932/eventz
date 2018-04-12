import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-registration-methods',
  templateUrl: 'registration-methods.html',
})
export class RegistrationMethodsPage {

  constructor(public navCtrl: NavController, 
    private storage : Storage,
    public navParams: NavParams) {
  }

  Login(){
    this.navCtrl.push('LoginPage')
  }

  creatAccount(){
    this.navCtrl.push('RegistrationPage')
  }

  goToCategories(){
    this.storage.set('isVisitor',true)
    this.navCtrl.push('ChooseFavoriteCategoryPage')
  }
}
