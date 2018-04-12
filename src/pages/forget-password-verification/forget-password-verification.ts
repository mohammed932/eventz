import { GeneralProvider } from './../../providers/general/general';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-forget-password-verification',
  templateUrl: 'forget-password-verification.html',
})
export class ForgetPasswordVerificationPage {
  data: any = {}
  isWaiting: boolean = false
  constructor(public navCtrl: NavController,
    private viewCrrl: ViewController,
    private authService: AuthProvider,
    private genralService: GeneralProvider,
    public navParams: NavParams) {
  }

  dismiss() {
    this.viewCrrl.dismiss()
  }

  setNewPAssword() {
    console.log("my data : ", this.data);
    this.isWaiting = true
    this.authService.resetPassword(this.data).subscribe(data => {
      if (data.hasOwnProperty('messages')) {
        let text = "";
        for (let key in data['messages']) {
          if (data['messages'].hasOwnProperty(key))
            text += data['messages'][key] + "<br><br>";
        }
        this.genralService.showAlert(text);
      } else {
        if (data['success']) {
          this.genralService.presentToast("your password has been changed successfully !")
          this.viewCrrl.dismiss(true)
        } else {
          this.genralService.presentToast("your password never changed !")
        }
      }
      this.isWaiting = false
    })
  }

}
