import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmployeePage } from '../employee/employee';
//import { Employee2Page } from '../employee2/employee2';

@Component({
  selector: 'page-employee2',
  templateUrl: 'employee2.html'
})
export class Employee2Page {

  constructor(public navCtrl: NavController) {
  }
  goToEmployee(params){
    if (!params) params = {};
    this.navCtrl.push(EmployeePage);
  }goToEmployee2(params){
    if (!params) params = {};
    this.navCtrl.push(Employee2Page);
  }
}
