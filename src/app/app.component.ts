import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from './../providers/auth-service/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

    rootPage:any = '';

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public auth: AuthServiceProvider) {
        
        platform.ready().then(() => {
            this.auth.init().then( () => {
                this.rootPage = this.auth.authenticated() ? 'HomePage' : 'LoginPage';
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                statusBar.styleDefault();
                splashScreen.hide();
            });
        });
    }
}

