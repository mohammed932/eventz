import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrationMethodsPage } from './registration-methods';

@NgModule({
  declarations: [
    RegistrationMethodsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrationMethodsPage),
  ],
})
export class RegistrationMethodsPageModule {}
