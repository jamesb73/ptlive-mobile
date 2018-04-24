import { NgModule } from '@angular/core';
import { PtliveInputComponent } from './ptlive-input/ptlive-input';
import { IonicModule } from 'ionic-angular';
import { PtliveContentComponent } from './ptlive-content/ptlive-content';

@NgModule({
	declarations: [PtliveInputComponent,
    PtliveContentComponent],
	imports: [IonicModule],
	exports: [PtliveInputComponent,PtliveContentComponent]
})
export class ComponentsModule {}
