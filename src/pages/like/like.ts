import { EventsProvider } from './../../providers/events/events';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-like',
  templateUrl: 'like.html',
})
export class LikePage {
  segmetType: string = 'events'
  type = "likes"
  Organizers: any[] = []
  displayLoading : boolean = true
  Events: any
  constructor(public navCtrl: NavController, 
    private eventService : EventsProvider,
    public navParams: NavParams) {
    // for (let i = 0; i < 10; i++) {
    //   this.Organizers.push(i)
    //   this.Events.push(i)
    // }
    this.getLikedEvents()
  }


  getLikedEvents(){
    
    this.eventService.getLikedEvents().subscribe( data => {
      this.Events = data
      this.displayLoading = false
      console.log('leked events data : ',this.Events);
    })
  }

  goToDetails(eventId){
    console.log('a7a eventId : ',eventId);
    
    this.navCtrl.push('EventDetailsPage', { eventId: eventId })
  }
 

}
