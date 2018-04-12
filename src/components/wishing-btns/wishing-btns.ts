import { EventsProvider } from './../../providers/events/events';
import { GeneralProvider } from './../../providers/general/general';
import { Component , Input, Output, EventEmitter} from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-wishing-btns',
  templateUrl: 'wishing-btns.html'
})
export class WishingBtnsComponent {
  @Input() event
  constructor(private storage : Storage , 
    private eventService : EventsProvider,
    private genralService : GeneralProvider
  ) {

  }


  async Wish(eventId) {
    if (await this.storage.get('isLogin')) {
      this.event.wishing = 1
      this.eventService.wish(eventId).subscribe(data => {
        console.log('wish response : ', data);
        if (data['success']) {
          this.event.wishing = 1
        }
      })
    } else {
      this.genralService.showAlert('You must login first');
    }

  }
  async unWish(eventId) {
    if (await this.storage.get('isLogin')) {
      this.event.wishing = 0
      this.eventService.unwish(eventId).subscribe(data => {
        console.log('unwish response : ', data);
        if (data['success']) {
          this.event.wishing = 0
        }
      })
    } else {
      this.genralService.showAlert('You must login first');
    }

  }

}
