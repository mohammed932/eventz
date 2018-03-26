import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-bottom',
  templateUrl: 'tabs-bottom.html'
})
export class TabsBottomComponent {

  text: string;

  constructor(private navCtrl : NavController) {
  
  }

  goToLikePage(){
    this.navCtrl.push('LikePage')
  }

}
