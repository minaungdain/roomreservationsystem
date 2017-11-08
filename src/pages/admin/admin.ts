import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Admin2Page } from '../admin2/admin2';
//import { AdminPage } from '../admin/admin';
import { Admin3Page } from '../admin3/admin3';
//import { AdminPage } from '../admin/admin';
import { Admin4Page } from '../admin4/admin4';
//import { AdminPage } from '../admin/admin';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  constructor(
    private navCtrl: NavController,
    private auth: AngularFireAuth) {
  }

  signOut() {
    this.auth.auth.signOut();
  }

  goToAdmin2(params){
    if (!params) params = {};
    this.navCtrl.push(Admin2Page);
  //}goToAdmin(params){
 //   if (!params) params = {};
 //   this.navCtrl.push(AdminPage);
  }goToAdmin3(params){
    if (!params) params = {};
    this.navCtrl.push(Admin3Page);
 // }goToAdmin(params){
  //  if (!params) params = {};
  //  this.navCtrl.push(AdminPage);
  }goToAdmin4(params){
    if (!params) params = {};
    this.navCtrl.push(Admin4Page);
  }//goToAdmin(params){
   // if (!params) params = {};
  //  this.navCtrl.push(AdminPage);
 // }
}
