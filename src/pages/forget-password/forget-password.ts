import { GeneralProvider } from './../../providers/general/general';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {
  email: string = ''
  isWaiting: boolean = false
  constructor(public navCtrl: NavController,
    private authService: AuthProvider,
    private viewCtrl: ViewController,
    private genralService: GeneralProvider,
    private modalCtrl: ModalController,
    public navParams: NavParams) {

  }


  dismiss() {
    this.viewCtrl.dismiss()
  }


  send() {
    this.isWaiting = true
    this.authService.forgetPassword(this.email).subscribe(data => {
      if (data.hasOwnProperty('messages')) {
        let text = "";
        for (let key in data['messages']) {
          if (data['messages'].hasOwnProperty(key)) 
            text += data['messages'][key] + "<br><br>";
        }
        this.genralService.showAlert(text);
      } else {
        if (data['success']) {
          let modal = this.modalCtrl.create('ForgetPasswordVerificationPage')
          modal.onDidDismiss( data => {
            if(data){
              this.viewCtrl.dismiss()
            }
          })
          modal.present()
        } 
      }
      this.isWaiting = false
    })
  }

}
