import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../Models/user.interface';


@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  User : any
  constructor(public navCtrl: NavController,
    private authService : AuthProvider,
     public navParams: NavParams) {
    this.User = {
      username : '',
      email : '',
      password: ''
    }
  }

  createAccount(){
    console.log('this.user : ',this.User);
    this.authService.register(this.User).subscribe( data => {
      if (data.hasOwnProperty('token')){
        localStorage.setItem('token', data['token'])
        this.navCtrl.setRoot('HomePage')
      } 
      console.log('register data is : ', data);
    })
  }

}
