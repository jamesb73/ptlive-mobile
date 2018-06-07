import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

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

}
