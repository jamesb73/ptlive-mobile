import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

/**
 * Generated class for the PtliveHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ptlive-header',
    templateUrl: 'ptlive-header.html'
})
export class PtliveHeaderComponent {

    constructor(public navCtrl: NavController) {}

    homePage() {
        if( this.navCtrl.getActive().name !== 'HomePage') {
            this.navCtrl.push('HomePage');
        }
    }

}
