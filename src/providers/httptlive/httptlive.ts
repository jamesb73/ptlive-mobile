import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController} from 'ionic-angular';

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

    constructor(public http: HttpClient, public alertCtrl: AlertController) {
        this.ptliveUrl = "https://ptlive.test:44300/api/";
    }

    setData( data) {
        this.formData = data;
        for( let i in data) {
            this.errors[i] = '';
        }
    }

    submit( type, url) {

        url = this.ptliveUrl + url;

        return new Promise( (resolve, reject) => {
            this.http[type](url, this.formData).subscribe( data => {
                
                resolve( data);
            },

            err => {

                // any 500 server errors will show an ionic alert
                if( err.status == 500) {
                    this.handle500();
                }

                if( err.status == 422) {
                    this.handle422( err.error.errors);
                }

                reject( err);
            });
        });
    }

    handle500() {
        let alert = this.alertCtrl.create({
            title: 'Whoops!',
            subTitle: 'Sorry, it looks like something went wrong! please try again later',
            buttons: ['OK']
        });
        alert.present();
    }

    handle422( err) {
        console.log(err);
        for( let i in err){
            this.errors[i] = err[i][0];
        }
    }

}
