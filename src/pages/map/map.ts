import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  lanLng : any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lanLng = this.navParams.get('lanLng')
    console.log('this.lanLng : ',this.lanLng);
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let latLng = new google.maps.LatLng(this.lanLng.lat, this.lanLng.lng);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

}