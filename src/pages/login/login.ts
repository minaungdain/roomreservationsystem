import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, IonicPage , AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AdminPage } from '../admin/admin';

//@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,
    private angfireAuth: AngularFireAuth){}

    alert(message: string) {
      this.alertCtrl.create({
        title: 'Info!',
        subTitle: message,
        buttons: ['OK']
      }).present();
    }

  signIn() {
    this.angfireAuth.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
       console.log("got some data", this.angfireAuth.auth.currentUser);
        //this.alert("Success! you're logged in");
        this.navCtrl.setRoot(AdminPage);
            //user is logged in
    })
    .catch (error => {
      console.log("got an error", error);
      this.alert(error.message);
    })
    console.log('Signed in with', this.user.value, this.password.value);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}


