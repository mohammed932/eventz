import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any
  constructor(public navCtrl: NavController , private authService : AuthProvider) {
    this.intialization()
  }

  intialization() {
    this.data = {
      username: '',
      password: ''
    }
  }

  login(){
     this.authService.login(this.data).subscribe( data => {
       console.log('login response : ',data);
     })
  }



}
