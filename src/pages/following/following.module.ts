import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowingPage } from './following';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FollowingPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowingPage),
    ComponentsModule
  ],
})
export class FollowingPageModule {}
