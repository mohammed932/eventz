import { OrganizerProvider } from './../../providers/organizer/organizer';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-organizer',
  templateUrl: 'event-organizer.html'
})
export class EventOrganizerComponent {

  @Input() type
  @Input() eventId
  @Input() organizer
  constructor(private organizerService: OrganizerProvider) {

  }

  Follow() {
    this.organizer.followed = 1
    this.organizerService.follow(this.eventId).subscribe(data => {
      console.log("follow reponse data : ", data);
      if (data['success']) {
        this.organizer.followed = 1
      }
    })
  }

  unFollow() {
    this.organizer.followed = 0
    this.organizerService.unfollow(this.eventId).subscribe(data => {
      console.log("unfollow reponse data : ", data);
      if (data['success']) {
        this.organizer.followed = 0
      }
    })
  }

}
