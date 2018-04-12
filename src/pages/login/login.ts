import { GeneralProvider } from './../../providers/general/general';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage'
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any
  isWaiting: boolean = false
  constructor(public navCtrl: NavController,
    private storage: Storage,
    private event : Events,
    private modalCtrl : ModalController,
    private genralService : GeneralProvider,
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
    this.isWaiting = true
    this.authService.login(this.data).subscribe(data => {
      if (data.hasOwnProperty('token')) {
        window.localStorage.setItem('token', data['token'])
        this.event.publish('Login:success')
        this.storage.set('isLogin', true)
        this.storage.set('isVisitor', false)
        this.navCtrl.setRoot('MainTopTabsPage')
        this.isWaiting = false
      }
    }, error => {
      this.genralService.presentToast(error['error'].error)
      this.isWaiting = false
    })
  }


  forgetPassword(){
    this.modalCtrl.create('ForgetPasswordPage').present()
  }


}
