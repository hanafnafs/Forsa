import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.menu.swipeEnable(false);
    console.log("home page here we go");
  } 

  toLoginPage(){
    this.navCtrl.push(LoginPage);
  }
  toRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }
 
}
