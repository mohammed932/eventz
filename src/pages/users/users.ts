import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  Users : any [] = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 10; i++) this.Users.push(i)
  }

  userDetails(){
    this.navCtrl.push('UserDetailsPage')
  }

  
}
