import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EventCardComponent } from './event-card/event-card';
import { EventOrganizerComponent } from './event-organizer/event-organizer';
import { NavatigationButtonsComponent } from './navatigation-buttons/navatigation-buttons';
@NgModule({
	declarations: [EventCardComponent,
    EventOrganizerComponent,
    NavatigationButtonsComponent],
	imports: [IonicModule],
	exports: [EventCardComponent,
    EventOrganizerComponent,
    NavatigationButtonsComponent]
})
export class ComponentsModule {}
