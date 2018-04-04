import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseFavoriteCategoryPage } from './choose-favorite-category';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ChooseFavoriteCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseFavoriteCategoryPage),
    ComponentsModule
  ],
})
export class ChooseFavoriteCategoryPageModule {}
