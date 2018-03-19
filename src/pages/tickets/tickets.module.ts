import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketsPage } from './tickets';

@NgModule({
  declarations: [
    TicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketsPage),
    ComponentsModule
  ],
})
export class TicketsPageModule {}
