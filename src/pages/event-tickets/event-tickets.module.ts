import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventTicketsPage } from './event-tickets';

@NgModule({
  declarations: [
    EventTicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventTicketsPage),
  ],
})
export class EventTicketsPageModule {}
