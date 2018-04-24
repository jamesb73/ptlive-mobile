import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { HttptliveProvider } from './../../providers/httptlive/httptlive';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  	constructor(
        public navCtrl: NavController,
        public auth: AuthServiceProvider,
        public httpt: HttptliveProvider
    ) {
        this.httpt.setData({
            email: '',
            password: ''
        });
    }

    ionViewCanEnter() {
        if( this.auth.authenticated()) {
            this.navCtrl.setRoot( 'HomePage');
        }
    }

  	login() {
        this.httpt.submit('post', 'login')
        .then( response => {
            this.auth.login();
            this.navCtrl.setRoot( 'HomePage');
        })
        .catch( error => {
            this.httpt.formData.password = '';
            if( error.status == 401) {
                this.httpt.errors.password = 'Incorrect email or password';
            }
        });
  	}

    signup() {
        this.navCtrl.push( 'SignupPage');
    }

}