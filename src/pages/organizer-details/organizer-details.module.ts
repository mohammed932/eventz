import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganizerDetailsPage } from './organizer-details';

@NgModule({
  declarations: [
    OrganizerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizerDetailsPage),
    ComponentsModule
  ],
})
export class OrganizerDetailsPageModule {}
