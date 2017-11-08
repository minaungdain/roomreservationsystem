import { ToastController } from 'ionic-angular/umd';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { Admin2Page } from '../admin2/admin2';
//import { AdminPage } from '../admin/admin';
import { Admin3Page } from '../admin3/admin3';
//import { AdminPage } from '../admin/admin';
import { Admin4Page } from '../admin4/admin4';
//import { AdminPage } from '../admin/admin';
import { EmployeePage } from '../employee/employee';
import { Employee2Page } from '../employee2/employee2';
//import { EmployeePage } from '../employee/employee';
import { ManagerPage } from '../manager/manager';
import { Manager2Page } from '../manager2/manager2';
//import { ManagerPage } from '../manager/manager';
import { Manager4Page } from '../manager4/manager4';
//import { ManagerPage } from '../manager/manager';
import { Manager5Page } from '../manager5/manager5';
//import { ManagerPage } from '../manager/manager';
import { Manager3Page } from '../manager3/manager3';
//import { ManagerPage } from '../manager/manager';
//import { ManagerPage } from '../manager/manager';
//import { SignupPage } from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  loginData = {
    email: '',
    password: ''
  }

constructor(
  private navCtrl: NavController,
  private afAuth: AngularFireAuth,
  private toastCtrl: ToastController){}

  //constructor(public navCtrl: NavController) {
  //}

  signin() {
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
      .then(auth => {

      })
      .catch(err => {
        //Handle error
        let toast = this.toastCtrl.create({
          message: err.message,
          duration: 1000
        });
        toast.present();
      })
  }

  //signup() {
  //  this.navCtrl.push(SignupPage, { email: this.loginData.email});

 // }
  goToAdmin(params){
    if (!params) params = {};
    this.navCtrl.push(AdminPage);
  }goToAdmin2(params){
    if (!params) params = {};
    this.navCtrl.push(Admin2Page);
  //}goToAdmin(params){
 //   if (!params) params = {};
 //   this.navCtrl.push(AdminPage);
  }goToAdmin3(params){
    if (!params) params = {};
    this.navCtrl.push(Admin3Page);
 // }goToAdmin(params){
 //   if (!params) params = {};
  //  this.navCtrl.push(AdminPage);
  }goToAdmin4(params){
    if (!params) params = {};
    this.navCtrl.push(Admin4Page);
 // }goToAdmin(params){
 //   if (!params) params = {};
 //   this.navCtrl.push(AdminPage);
  }goToEmployee(params){
    if (!params) params = {};
    this.navCtrl.push(EmployeePage);
  }goToEmployee2(params){
    if (!params) params = {};
    this.navCtrl.push(Employee2Page);
  //}goToEmployee(params){
  //  if (!params) params = {};
 //   this.navCtrl.push(EmployeePage);
  }goToManager(params){
    if (!params) params = {};
    this.navCtrl.push(ManagerPage);
  }goToManager2(params){
    if (!params) params = {};
    this.navCtrl.push(Manager2Page);
 // }goToManager(params){
 //   if (!params) params = {};
 //   this.navCtrl.push(ManagerPage);
  }goToManager4(params){
    if (!params) params = {};
    this.navCtrl.push(Manager4Page);
  //}goToManager(params){
 //   if (!params) params = {};
 //   this.navCtrl.push(ManagerPage);
  }goToManager5(params){
    if (!params) params = {};
    this.navCtrl.push(Manager5Page);
  //}goToManager(params){
  //  if (!params) params = {};
 //   this.navCtrl.push(ManagerPage);
  }goToManager3(params){
    if (!params) params = {};
    this.navCtrl.push(Manager3Page);
 // }goToManager(params){
 //   if (!params) params = {};
 //   this.navCtrl.push(ManagerPage);
 // }goToManager(params){
 //   if (!params) params = {};
  //  this.navCtrl.push(ManagerPage);
  }
}
