import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EventCardComponent } from './event-card/event-card';
import { EventOrganizerComponent } from './event-organizer/event-organizer';
import { NavatigationButtonsComponent } from './navatigation-buttons/navatigation-buttons';
import { TabsBottomComponent } from './tabs-bottom/tabs-bottom';
import { UserComponent } from './user/user';
import { LoadingComponent } from './loading/loading';
import { NoResultFoundComponent } from './no-result-found/no-result-found';
@NgModule({
	declarations: [EventCardComponent,
    EventOrganizerComponent,
    NavatigationButtonsComponent,
    TabsBottomComponent,
    UserComponent,
    LoadingComponent,
    NoResultFoundComponent],
	imports: [IonicModule],
	exports: [EventCardComponent,
    EventOrganizerComponent,
    NavatigationButtonsComponent,
    TabsBottomComponent,
    UserComponent,
    LoadingComponent,
    NoResultFoundComponent]
})
export class ComponentsModule {}
