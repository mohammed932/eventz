import { EventsProvider } from './../../providers/events/events';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-wishing',
  templateUrl: 'wishing.html',
})
export class WishingPage {
  events : any 
  type = "likes"
  displayLoading : boolean = true
  constructor(public navCtrl: NavController, 
    private eventService : EventsProvider,
    public navParams: NavParams) {
      this.getWishingEvents()
  }


  getWishingEvents(){
    this.eventService.getWishingEvents().subscribe( data => {
      this.events = data
      this.displayLoading = false
      console.log('wishing response : ', data);
      
    })
  }
  test(data){
   console.log("uuuu : ",data);
   
  }
}
