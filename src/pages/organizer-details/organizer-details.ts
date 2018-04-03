import { OrganizerProvider } from './../../providers/organizer/organizer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-organizer-details',
  templateUrl: 'organizer-details.html',
})
export class OrganizerDetailsPage {
  events : any [] = []
  type = "likes"
  organizerId : number
  eventId : number
  organizer : any
  displayLoading : boolean = true
  constructor(public navCtrl: NavController, 
    private organizerService : OrganizerProvider,
    public navParams: NavParams) {
    this.organizerId = this.navParams.get('organizerId')
    this.eventId = this.navParams.get('eventId')
    console.log('this.eventId : ',this.eventId);
    
    this.getOrganizerDetails()
  }


  getOrganizerDetails(){
    this.organizerService.getOrganizerDetails(this.organizerId).subscribe( data =>{
      this.organizer = data
      this.events = data['events']
      this.displayLoading = false
      console.log('organizer data :',data);
    })
  }

}
