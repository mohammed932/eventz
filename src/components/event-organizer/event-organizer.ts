import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-organizer',
  templateUrl: 'event-organizer.html'
})
export class EventOrganizerComponent {

  @Input() type

  constructor() {

  }

}
