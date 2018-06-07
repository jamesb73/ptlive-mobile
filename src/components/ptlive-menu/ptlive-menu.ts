import { Component, Input } from '@angular/core';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { App } from 'ionic-angular';


/**
 * Generated class for the PtliveMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ptlive-menu',
    templateUrl: 'ptlive-menu.html'
})
export class PtliveMenuComponent {

    @Input('content') content: any;

    constructor(
        public auth: AuthServiceProvider,
        public app: App
    ) {}

    logout() {
        this.auth.logout();
        this.goToPage( 'LoginPage');
    }

    goToPage(page) {
        if( this.app.getActiveNav().getActive().name !== page) {
            this.app.getActiveNav().push( page, {},{ animate: true, direction: 'forward'});
        }
    }

}
