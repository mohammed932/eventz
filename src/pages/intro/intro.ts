import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  town : any = "-1"
  constructor(public navCtrl: NavController, 
    private geolocation : Geolocation,
    private storage : Storage,
    public navParams: NavParams) {
  }

  nextStep(){
    this.navCtrl.push('RegistrationMethodsPage')
  }

  getUserLocation(){
    console.log("ayayya");
    
    this.geolocation.getCurrentPosition().then((resp) => {
      this.storage.set('lat',resp.coords.latitude)
      this.storage.set('lng',resp.coords.longitude)
      console.log('user location : ',resp);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
