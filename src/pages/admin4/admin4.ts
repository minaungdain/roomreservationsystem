import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { Admin2Page } from '../admin2/admin2';
//import { AdminPage } from '../admin/admin';
import { Admin3Page } from '../admin3/admin3';
//import { AdminPage } from '../admin/admin';
//import { Admin4Page } from '../admin4/admin4';

@Component({
  selector: 'page-admin4',
  templateUrl: 'admin4.html'
})
export class Admin4Page {

  constructor(public navCtrl: NavController) {
  }
  goToAdmin(params){
    if (!params) params = {};
    this.navCtrl.push(AdminPage);
  }goToAdmin2(params){
    if (!params) params = {};
    this.navCtrl.push(Admin2Page);
  //}goToAdmin(params){
  //  if (!params) params = {};
  //  this.navCtrl.push(AdminPage);
  }goToAdmin3(params){
    if (!params) params = {};
    this.navCtrl.push(Admin3Page);
  //}goToAdmin(params){
  //  if (!params) params = {};
  //  this.navCtrl.push(AdminPage);
  }goToAdmin4(params){
    if (!params) params = {};
    this.navCtrl.push(Admin4Page);
  }
}
