import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any
  constructor(public navCtrl: NavController,
    private storage: Storage,
    private authService: AuthProvider) {
    this.intialization()
  }

  intialization() {
    this.data = {
      username: '',
      password: ''
    }
  }

  login() {
    this.authService.login(this.data).subscribe(data => {
      if (data.hasOwnProperty('token')){
        console.log("my token : ",data['token']);
        
        window.localStorage.setItem('token', data['token'])
        this.storage.set('isLogin',true)
        this.navCtrl.setRoot('MainTopTabsPage')
      } 
    })
  }



}
