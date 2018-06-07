import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PtliveInputComponent } from './ptlive-input/ptlive-input';
import { PtliveContentComponent } from './ptlive-content/ptlive-content';
import { PtliveCountdownComponent } from './ptlive-countdown/ptlive-countdown';
import { PtliveHeaderComponent } from './ptlive-header/ptlive-header';
import { PtliveMapComponent } from './ptlive-map/ptlive-map';
import { PtliveMenuComponent } from './ptlive-menu/ptlive-menu';

@NgModule({
	declarations: [
        PtliveInputComponent,
        PtliveContentComponent,
        PtliveCountdownComponent,
        PtliveHeaderComponent,
        PtliveMapComponent,
        PtliveMenuComponent
    ],
	imports: [IonicModule],
	exports: [
        PtliveInputComponent,
        PtliveContentComponent,
        PtliveCountdownComponent,
        PtliveHeaderComponent,
        PtliveMapComponent,
        PtliveMenuComponent
    ]
})
export class ComponentsModule {}
