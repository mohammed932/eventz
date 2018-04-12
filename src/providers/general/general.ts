import { Injectable } from '@angular/core';
import { ToastController, AlertController } from 'ionic-angular';
import * as moment from 'moment';

@Injectable()
export class GeneralProvider {

  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


  showAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  formatData(date, status) {
    let dataString = ``
    let dayName = moment(date).format('dddd')
    let monthName = moment(date).format('MMMM')
    let dayOfMonth = moment(date).format('D')
    let year = moment(date, "YYYY").year()
    let amPm = moment(date).format('hh:mm A')
    if (status == '0') return dataString = `${dayOfMonth} ${monthName} ${year}`
    else return dataString = `${amPm}`
  }

}
