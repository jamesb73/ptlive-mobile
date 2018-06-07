import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';


@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

	constructor(
        public navCtrl: NavController,
        public auth: AuthServiceProvider
    ) {}

	ionViewCanEnter() {
		if( !this.auth.authenticated()){
            this.auth.logout();
            this.navCtrl.setRoot( 'LoginPage');
        }
    }

    ionViewDidLoad() {
        console.log('we have loaded');
    }
}
