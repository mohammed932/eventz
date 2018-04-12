import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  myInput: any
  constructor(public navCtrl: NavController,
    private viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

  onInput(ev: any) {
    console.log('evev : ',ev.target.value);
    
    // Reset items back to all of the items
    // this.initializeItems();

    // // set val to the value of the searchbar
    // let val = ev.target.value;

    // // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //   this.items = this.items.filter((item) => {
    //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // }
  }


}
