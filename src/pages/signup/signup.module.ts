import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { HttptliveProvider } from '../../providers/httptlive/httptlive';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    ComponentsModule
  ],
  entryComponents: [SignupPage],
  providers: [HttptliveProvider]
})
export class SignupPageModule {}
