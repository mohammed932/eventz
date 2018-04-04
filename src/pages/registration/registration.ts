import { GeneralProvider } from './../../providers/general/general';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../Models/user.interface';


@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  User: any
  isWaiting: boolean = false
  constructor(public navCtrl: NavController,
    private genralService: GeneralProvider,
    private authService: AuthProvider,
    public navParams: NavParams) {
    this.User = {
      username: '',
      email: '',
      password: ''
    }
  }

  createAccount() {
    this.isWaiting = true
    console.log('this.user : ', this.User);
    this.authService.register(this.User).subscribe(data => {
      console.log('registrea : ', data);

      if (data.hasOwnProperty('token')) {
        localStorage.setItem('token', data['token'])
        this.navCtrl.setRoot('HomePage')
      } else {
        console.log("hhhh", data['messages']);
        let text = "";
        for (let key in data['messages']) {
          if (data['messages'].hasOwnProperty(key)) {
            console.log(key + " -> " + data['messages'][key]);
            text += data['messages'][key] + "<br><br>";
          }
        }
        this.genralService.showAlert(text);
      }
      this.isWaiting = false
    }, error => {
      this.genralService.presentToast(error['error'].error)
      this.isWaiting = false
    })
  }

  

}
