import { LoginPage } from './../pages/login/login';
import { AngularFireAction } from 'angularfire2/database/interfaces';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  constructor(platform: Platform, private angfireAuth: AngularFireAuth, private StatusBar: StatusBar, private splashScreen: SplashScreen) {
     /* this.angfireAuth.authState.subscribe(auth => {
        if (!auth)
           this.rootPage = LoginPage;
        else
          this.rootPage = AdminPage;
      });
*/
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      splashScreen.hide();
    });
  }

}

