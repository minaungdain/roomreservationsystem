import { AdminPage } from './../pages/admin/admin';
import { LoginPage } from './../pages/login/login';
import { AngularFireAction } from 'angularfire2/database/interfaces';
//import { HomePage } from './../pages/home/home';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

    rootPage:any;// = LoginPage;
    //rootPage:LoginPage;

    //const unsubscribe =
   // const unsubscribe = firebase.auth().onAuthStateChanged(user => {
   //  firebase.auth().onAuthStateChanged(function(user)) {
    //    this.user = user;
    //    if (user) {
    //    this.rootPage = 'AdminPage';
    //    unsubcribe();
   //   } else {
    //    this.rootPage = 'LoginPage';
    //    unsubscribe();
    //  }
   // });
    firebase.auth().onAuthStateChanged(function(user) {
      this.user = user; // Set my local copy of the 'user' object
      if (user) {
        this.rootPage = 'AdminPage';
      } else {
        this.rootPage = 'LoginPage';
      }

    }

    constructor(platform: Platform, private angfireAuth: AngularFireAuth, private StatusBar: StatusBar, private splashScreen: SplashScreen) {
      this.angfireAuth.authState.subscribe(auth => {
        if (!auth)
           this.rootPage = LoginPage;
        else
          this.rootPage = AdminPage;
      });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      splashScreen.hide();
    });
  }

}

