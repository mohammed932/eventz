import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventTicketsPage } from './event-tickets';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EventTicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventTicketsPage),
    ComponentsModule
  ],
})
export class EventTicketsPageModule {}
