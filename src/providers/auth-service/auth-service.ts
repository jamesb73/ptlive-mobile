import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import  Cookies  from 'js-cookie';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

    public data: any;

	constructor(private storage: Storage) {}

    init() {
        return new Promise( resolve => {
            this.storage.get('ptlive_data').then( data => {
                this.data = data;
                resolve();
            });
        });
    }
 
	login( data) {
        this.storage.set('ptlive_data', data);
        this.data = data;
	}

	logout() {
	  	this.storage.set('ptlive_data', null);
        this.data = null;
	}

    auth_token() {
        return this.data ? this.data.token : '';
    }

	authenticated() {
	  	return !!this.data;
	}

}
