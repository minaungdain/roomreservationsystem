import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Employee2Page } from '../employee2/employee2';
//import { EmployeePage } from '../employee/employee';

@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html'
})
export class EmployeePage {

  constructor(public navCtrl: NavController) {
  }
  goToEmployee2(params){
    if (!params) params = {};
    this.navCtrl.push(Employee2Page);
  }goToEmployee(params){
    if (!params) params = {};
    this.navCtrl.push(EmployeePage);
  }
}
