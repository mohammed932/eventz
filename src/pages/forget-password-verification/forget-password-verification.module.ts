import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgetPasswordVerificationPage } from './forget-password-verification';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ForgetPasswordVerificationPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgetPasswordVerificationPage),
    ComponentsModule
  ],
})
export class ForgetPasswordVerificationPageModule {}
