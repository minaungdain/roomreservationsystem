import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AdminPage } from '../admin/admin';
//import { Admin2Page } from '../admin2/admin2';
import { Admin3Page } from '../admin3/admin3';
//import { AdminPage } from '../admin/admin';
import { Admin4Page } from '../admin4/admin4';
import { AdminPage } from '../admin/admin';

@Component({
  selector: 'page-admin2',
  templateUrl: 'admin2.html'
})
export class Admin2Page {

  constructor(public navCtrl: NavController) {
  }
  goToAdmin(params){
    if (!params) params = {};
    this.navCtrl.push(AdminPage);
  }goToAdmin2(params){
    if (!params) params = {};
    this.navCtrl.push(Admin2Page);
  }goToAdmin3(params){
    if (!params) params = {};
    this.navCtrl.push(Admin3Page);
 // }goToAdmin(params){
 //   if (!params) params = {};
 //   this.navCtrl.push(AdminPage);
  }goToAdmin4(params){
    if (!params) params = {};
    this.navCtrl.push(Admin4Page);
  //}goToAdmin(params){
  //  if (!params) params = {};
  //  this.navCtrl.push(AdminPage);
  }
}
