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
        if( this.auth.authenticated()){
            this.navCtrl.setRoot( 'HomePage');
        }
    }

  	login() {
        this.auth.login({
            token : 'dg2hjshg789n312bahk',
            user  : {
                created_at:"2018-04-26 19:51:40",
                email:"james@ptlive.co",
                id:3,
                name:"James",
                updated_at:"2018-04-26 19:51:40"
            }
        });
        this.navCtrl.push( 'HomePage');

        // this.httpt.submit('post', 'login')
        // .then( response => {
        //     this.auth.login( response['data']);
        //     this.navCtrl.push( 'HomePage');
        // })
        // .catch( error => {
        //     this.httpt.formData['password'] = '';
        //     if( error.status == 401) {
        //         this.httpt.errors['password'] = 'Incorrect email or password';
        //     }
        // });
  	}

    signup() {
        this.navCtrl.push( 'SignupPage');
    }

}