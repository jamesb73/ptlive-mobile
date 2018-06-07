import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { HttptliveProvider } from '../../providers/httptlive/httptlive';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [ChatPage],
  imports: [IonicPageModule.forChild(ChatPage), ComponentsModule],
  entryComponents: [ChatPage],
  providers: [HttptliveProvider]
})
export class ChatPageModule {}
