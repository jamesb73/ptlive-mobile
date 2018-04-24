import { NgModule } from '@angular/core';
import { LoginPage} from './login';
import { IonicPageModule } from 'ionic-angular';
import { HttptliveProvider } from '../../providers/httptlive/httptlive';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [LoginPage],
  imports: [IonicPageModule.forChild(LoginPage), ComponentsModule ],
  entryComponents: [LoginPage],
  providers: [HttptliveProvider]
})
export class HomePageModule { }
