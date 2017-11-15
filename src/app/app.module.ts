
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Config, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { LoginPage } from "../pages/login/login";
import { AdminPage } from '../pages/admin/admin';

// Initialize Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyA1Nezh3LBYWMBtwPnw4uDNIcBIbXtwDj0",
    authDomain: "roomreservationsystem-7de09.firebaseapp.com",
    databaseURL: "https://roomreservationsystem-7de09.firebaseio.com",
    projectId: "roomreservationsystem-7de09",
    storageBucket: "roomreservationsystem-7de09.appspot.com",
    messagingSenderId: "52821733340"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AdminPage,
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AdminPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
