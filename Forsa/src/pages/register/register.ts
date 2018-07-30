import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RootProvider } from '../../providers/root/root';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  
})
export class RegisterPage {
  fName:string;

  /*  governorates:string[] = [
  
      'Cairo',
      'Alexandria',
      'Giza',
      'Qalyoubia',
      'Tanta',
      'Suez',
      'Aswan',
      'Faiyum',
      'Sharqia',
      'Minya',
      'PortSaid'
  
    ]*/

  constructor(public navCtrl: NavController,public navParams: NavParams, public root: RootProvider, public http: Http,
              public menu: MenuController) {
      this.menu.swipeEnable(false);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  regActionName = "AddNewUser";
  public register(useremail: String, userpassword: String, mobile: string, firstname: string, address: string, gender: string) {
    console.log(`${this.root.APIURL}${this.regActionName}?user_email=${useremail}&user_pwd=${userpassword}&mobile=${mobile}&fname=${firstname}&home_address=${address}&gender=${gender}`);
    this.http.get(`${this.root.APIURL}${this.regActionName}?user_email=${useremail}&user_pwd=${userpassword}&mobile=${mobile}&fname=${firstname}&home_address=${address}&gender=${gender}`)
      .map(res => <any>res.json())
      .subscribe(data => {
        if (data != null) {
          console.log(data);
          this.navCtrl.setRoot(LoginPage);
        } else {
          alert("Error in reg");
        }
      });
  } 

}
