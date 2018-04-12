import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-description',
  templateUrl: 'event-description.html'
})
export class EventDescriptionComponent {

  text: string;
  @Input() event
  constructor() {

  }

  adjustSringStyle(str) {
    return str.split("\n").join("<br />");
  }

  sliceString(str) {
    return str.split(/\s+/).slice(0, 20).join(" ");
  }

  getDesc(event) {
    if (event.hasOwnProperty('description')) {
      return event.description
    } else if (event.hasOwnProperty('brief')) {
      return event.brief
    } else if (event.hasOwnProperty('details')) {
      return event.details
    }
  }

}
