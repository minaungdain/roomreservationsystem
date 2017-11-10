
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Config, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { AdminPage } from '../pages/admin/admin';
//import { Admin2Page } from '../pages/admin2/admin2';
//import { Admin3Page } from '../pages/admin3/admin3';
//import { Admin4Page } from '../pages/admin4/admin4';
//import { EmployeePage } from '../pages/employee/employee';
//import { Employee2Page } from '../pages/employee2/employee2';
//import { ManagerPage } from '../pages/manager/manager';
//import { Manager2Page } from '../pages/manager2/manager2';
//import { Manager3Page } from '../pages/manager3/manager3';
//import { Manager4Page } from '../pages/manager4/manager4';
//import { Manager5Page } from '../pages/manager5/manager5';
//import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';

 // Initialize Firebase
var config = {
    apiKey: "AIzaSyA1Nezh3LBYWMBtwPnw4uDNIcBIbXtwDj0",
    authDomain: "roomreservationsystem-7de09.firebaseapp.com",
    databaseURL: "https://roomreservationsystem-7de09.firebaseio.com",
    projectId: "roomreservationsystem-7de09",
    storageBucket: "roomreservationsystem-7de09.appspot.com",
    messagingSenderId: "52821733340"
};
firebase.initializeApp(Config);
/*
export const firebaseAuthConfig = {
  provider: AuthProviders
 // method: AuthMethod.Password
}*/

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AdminPage,
   // Admin2Page,
   // Admin3Page,
   // Admin4Page,
  //  EmployeePage,
  //  Employee2Page,
  //  ManagerPage,
  //  Manager2Page,
   // Manager3Page,
  //  Manager4Page,
   // Manager5Page,
   // HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AdminPage,
  //  Admin2Page,
  //  Admin3Page,
  //  Admin4Page,
  //  EmployeePage,
  //  Employee2Page,
  //  ManagerPage,
  //  Manager2Page,
  //  Manager3Page,
  //  Manager4Page,
  //  Manager5Page,
    //HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
