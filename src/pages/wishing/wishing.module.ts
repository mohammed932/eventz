import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WishingPage } from './wishing';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    WishingPage,
  ],
  imports: [
    IonicPageModule.forChild(WishingPage),
    ComponentsModule
  ],
})
export class WishingPageModule {}
