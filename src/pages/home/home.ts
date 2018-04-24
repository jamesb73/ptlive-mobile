import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import  moment  from 'moment';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor( public navCtrl: NavController, public auth: AuthServiceProvider) {}

	ionViewCanEnter() {
		if( !this.auth.authenticated()) {
			this.logout();
		}
    }

    logout() {
        this.auth.logout();
        this.navCtrl.setRoot( 'LoginPage');
    }

  	test() {
		console.log( moment().format());
	}
}
