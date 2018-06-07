import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { HttptliveProvider } from './../../providers/httptlive/httptlive';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

    constructor(
        public navCtrl: NavController,
        public auth: AuthServiceProvider,
        public httpt: HttptliveProvider
    ){
        this.httpt.setData({
            name: '',
            email: '',
            group_code: '',
            password: '',
            password_confirmation: ''
        });
    }

    ionViewCanEnter() {
        if( this.auth.authenticated()){
            this.navCtrl.setRoot( 'HomePage');
        }
    }

    signup() {
        this.httpt.submit('post', 'register')
        .then( response => {
            this.auth.login( response['token']);
            this.navCtrl.push( 'HomePage');
        })
        .catch( error => {
            this.httpt.formData['password_confirmation'] = '';
        });
    }

    login() {
        this.navCtrl.pop();
    }
}
