import { AdminPage } from './../pages/admin/admin';
import { LoginPage } from './../pages/login/login';
import { AngularFireAction } from 'angularfire2/database/interfaces';
//import { HomePage } from './../pages/home/home';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

   // rootPage:any = LoginPage;
      rootPage:any;
  constructor(platform: Platform, private afAuth: AngularFireAuth, private StatusBar: StatusBar, private splashScreen: SplashScreen) {
    this.afAuth.authState.subscribe(auth => {
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

