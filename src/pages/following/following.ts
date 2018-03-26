import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-following',
  templateUrl: 'following.html',
})
export class FollowingPage {
  Organizers : any [] = []
  type : string = 'follower'
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 10; i++) this.Organizers.push(i)
  }

}
