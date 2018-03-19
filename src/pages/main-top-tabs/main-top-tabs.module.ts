import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainTopTabsPage } from './main-top-tabs';

@NgModule({
  declarations: [
    MainTopTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(MainTopTabsPage),
  ],
})
export class MainTopTabsPageModule {}
