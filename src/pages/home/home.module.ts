import { NgModule } from '@angular/core';
import { HomePage} from './home';
import { IonicPageModule } from 'ionic-angular';
import { HttptliveProvider } from '../../providers/httptlive/httptlive';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage), ComponentsModule],
  entryComponents: [HomePage],
  providers: [HttptliveProvider]
})
export class HomePageModule { }