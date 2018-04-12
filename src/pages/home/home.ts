import { Storage } from '@ionic/storage';
import { EventsProvider } from './../../providers/events/events';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  events: any
  type = "event"
  displayLoading: boolean = true
  data: any
  constructor(public navCtrl: NavController,
    private eventService: EventsProvider,
    private storage: Storage,
    public navParams: NavParams) {
    this.data = {
      isLike: false,
      isFollow: false
    }

    this.getEvents()
  }

  editFavoriate() {
    this.navCtrl.push('ChooseFavoriteCategoryPage')
  }


  getEvents() {
    this.storage.get('catIds').then(cats => {
      let params = {};
      params['type_id'] =  '' 
      if (cats) params = { type_id: cats }
      if(localStorage.getItem('country') != 'undefined') 
         params['country_id'] = localStorage.getItem('country')
      if(localStorage.getItem('city') != 'undefined') 
         params['city_id'] = localStorage.getItem('city')
      console.log('paramsparams : ',params);
      
      this.eventService.getEvents(params).subscribe(data => {
        console.log("events data : ", data);
        this.events = data
        this.displayLoading = false
      })
    })
  }

  goToDetails(eventId) {
    this.navCtrl.push('EventDetailsPage', { eventId: eventId })
  }





}
