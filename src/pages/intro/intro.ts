import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MetaProvider } from '../../providers/meta/meta';
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  data: any = {}
  Countries: any
  Cities: any
  constructor(public navCtrl: NavController,
    private geolocation: Geolocation,
    private metaService: MetaProvider,
    private storage: Storage,
    public navParams: NavParams) {
    this.getCountries()
  }

  nextStep() {
    if (this.data.country != 'undefined') {
      localStorage.setItem('country', this.data.country)
    }
    if (this.data.city != 'undefined') {
      localStorage.setItem('city', this.data.city)
    }
    console.log('country storage : ',localStorage.getItem('country'));
    // console.log('country', this.data.country, 'city', this.data.city);
    this.navCtrl.push('RegistrationMethodsPage')
  }

  getUserLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      localStorage.setItem('lat', JSON.stringify(resp.coords.latitude))
      localStorage.setItem('lng', JSON.stringify(resp.coords.longitude))
      console.log('user location : ', resp);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getCountries() {
    this.metaService.getCountries().subscribe(data => {
      this.Countries = data
    })
  }

  getCities(countryId) {
    this.metaService.getCities(countryId).subscribe(data => {
      this.Cities = data
    })
  }

}
