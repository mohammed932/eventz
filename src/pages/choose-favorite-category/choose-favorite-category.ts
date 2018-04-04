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
  Cats: any
  newCats: any[] = []
  displayLoading: boolean = true
  constructor(public navCtrl: NavController,
    private eventService: EventsProvider,
    private storage: Storage,
    public navParams: NavParams) {
    this.getEventsType()
    this.getCatsFromStorage()
  }

  home() {
    console.log('catIds : ',this.newCats.join());
    
    
    this.navCtrl.push('MainTopTabsPage')
  }

  getCatsFromStorage() {
    this.storage.get('cats').then( val => {
      if (val) {
        this.Cats = val
        for (let item in this.Cats) {
          if (this.Cats[item].hasOwnProperty('checked')) {
            if (this.Cats[item].checked) {
              this.newCats.push(this.Cats[item].id)
            }
          }
        }
        console.log("my storage cats : ", this.Cats);
      }
    })
  }

  getEventsType() {
    this.eventService.getEventsType().subscribe(data => {
      if (this.Cats.length === 0) this.Cats = data
      this.displayLoading = false
    })

  }

  onChange(cat_id, checked) {
    if (checked){
      this.newCats.push(cat_id)
    } 
    else{
      this.newCats = this.newCats.filter(item => { return item != cat_id })
    } 
    this.storage.set('catIds', this.newCats.join())
    this.storage.set('cats', this.Cats)

  }

  selectAll(){
    for (let item in this.Cats) {
      this.Cats[item].checked = true
      this.newCats.push(this.Cats[item].id)
    }
    console.log('newCatsnewCats : ',this.newCats);
    this.storage.set('catIds', this.newCats.join())

    this.storage.set('cats', this.Cats)
  }

}
