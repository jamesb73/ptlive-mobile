import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ComponentsModule } from '../components/components.module';
import { RouteProvider } from '../providers/route/route';

@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicStorageModule.forRoot({
            name: '__ptlivedb',
            driverOrder: ['websql', 'indexeddb', 'sqlite']
        }),
        IonicModule.forRoot( MyApp, {
            preloadModules: true
        }),
        ComponentsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthServiceProvider,
        RouteProvider
    ]
})
export class AppModule {}
