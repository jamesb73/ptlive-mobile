import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { App } from "ionic-angular";

/*
  Generated class for the HttptliveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttptliveProvider {

    ptliveUrl:any = '';
    formData = {};
    errors = {};

    constructor(
        public http: HttpClient,
        public alertCtrl: AlertController,
        public auth: AuthServiceProvider,
        public app: App
    ) {
        this.ptliveUrl = "http://ptlive.test/api/";
        
    }

    setData( data) {
        for( let i in data) {
            this.errors[i] = '';
            this.formData[i] = data[i];
        }
    }

    options() {
        return {
            headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.auth_token())
        };
    }

    submit( type, url) {
        return new Promise( (resolve, reject) => {
            this.http[type](
                this.ptliveUrl + url,
                this.secondParams( type),
                this.options()
            )
            .subscribe( data => {
                resolve( data);
            },
            err => {
                if( err.status == 500) {
                    this.handle500();    
                }
                if( err.status == 422) {
                    this.handle422( err.error.errors);
                }
                if( err.status == 401) {
                    this.handle401();
                }
                reject( err);
            });
        });
    }

    secondParams(type) {
        return type == 'get' ? this.options() : this.formData;
    }

    handle500() {
        // any 500 server errors will show an ionic alert
        let alert = this.alertCtrl.create({
            title: 'Whoops!',
            subTitle: 'Sorry, it looks like something went wrong! please try again later',
            buttons: ['OK']
        });
        alert.present();
    }

    handle422( err) {
        for( let i in err){
            this.errors[i] = err[i][0];
        }
    }

    handle401() {
        this.auth.logout();
        let nav = this.app.getActiveNav();
        nav.setRoot('LoginPage');
    }

}
