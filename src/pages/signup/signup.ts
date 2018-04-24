import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
            email: '',
            password: ''
        });
    }

    signup() {
        console.log( 'creating account');
    }

    login() {
        this.navCtrl.pop();
    }
}
