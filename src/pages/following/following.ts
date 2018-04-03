import { OrganizerProvider } from './../../providers/organizer/organizer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-following',
  templateUrl: 'following.html',
})
export class FollowingPage {
  Organizers: any
  type: string = 'follower'
  displayLoading : boolean = true
  constructor(public navCtrl: NavController,
    private organizerService: OrganizerProvider,
    public navParams: NavParams) {
    this.followedOrganizers()
  }


  followedOrganizers() {
    this.organizerService.followedOrganizers().subscribe(data => {
      this.Organizers = data
      this.displayLoading = false
      console.log('followed organizers response : ', data);
    })
  }

}
