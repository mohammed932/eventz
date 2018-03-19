import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketTypesPage } from './ticket-types';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TicketTypesPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketTypesPage),
    ComponentsModule
  ],
})
export class TicketTypesPageModule {}
