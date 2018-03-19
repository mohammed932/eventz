import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseFavoriteCategoryPage } from './choose-favorite-category';

@NgModule({
  declarations: [
    ChooseFavoriteCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseFavoriteCategoryPage),
  ],
})
export class ChooseFavoriteCategoryPageModule {}
