import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Manager2Page } from '../manager2/manager2';
//import { ManagerPage } from '../manager/manager';
import { Manager4Page } from '../manager4/manager4';
//import { ManagerPage } from '../manager/manager';
import { Manager5Page } from '../manager5/manager5';
//import { ManagerPage } from '../manager/manager';
import { Manager3Page } from '../manager3/manager3';
//import { ManagerPage } from '../manager/manager';
//import { ManagerPage } from '../manager/manager';

@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html'
})
export class ManagerPage {

  constructor(public navCtrl: NavController) {
  }
  goToManager2(params){
    if (!params) params = {};
    this.navCtrl.push(Manager2Page);
  //}goToManager(params){
  ////  if (!params) params = {};
    this.navCtrl.push(ManagerPage);
  }goToManager4(params){
    if (!params) params = {};
    this.navCtrl.push(Manager4Page);
  //}goToManager(params){
  //  if (!params) params = {};
  //  this.navCtrl.push(ManagerPage);
  }goToManager5(params){
    if (!params) params = {};
    this.navCtrl.push(Manager5Page);
  //}goToManager(params){
   // if (!params) params = {};
   // this.navCtrl.push(ManagerPage);
  }goToManager3(params){
    if (!params) params = {};
    this.navCtrl.push(Manager3Page);
  //}goToManager(params){
 //   if (!params) params = {};
 //   this.navCtrl.push(ManagerPage);
 // }goToManager(params){
 //   if (!params) params = {};
  //  this.navCtrl.push(ManagerPage);
  }
}
