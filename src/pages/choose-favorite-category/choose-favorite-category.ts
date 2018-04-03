import { Storage } from '@ionic/storage';
import { EventsProvider } from './../../providers/events/events';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-choose-favorite-category',
  templateUrl: 'choose-favorite-category.html',
})
export class ChooseFavoriteCategoryPage {
  Cats : any
  newCats : any = []
  constructor(public navCtrl: NavController, 
    private eventService : EventsProvider,
    private storage : Storage,
    public navParams: NavParams) {
      this.getEventsType()
  }

  home(){
    console.log("a7a77a7a7a : ",this.newCats.join());
    this.storage.set('cats',this.newCats.join())
    this.navCtrl.push('MainTopTabsPage')
  }

  getEventsType(){
    this.eventService.getEventsType().subscribe( data =>{
      this.Cats = data
      console.log("getEventsType : ", data);
    })
  }

  onChange(cat_id , checked){
    console.log('cat_id : ',cat_id , 'checked : ',checked);
    if(checked){
      this.newCats.push(cat_id)
    }else{
      this.newCats = this.newCats.filter(item => { return item != cat_id })
    }
  }

}
