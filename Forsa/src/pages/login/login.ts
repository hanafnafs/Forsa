import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Events } from 'ionic-angular';
import { Http } from '@angular/http';
import { RootProvider } from '../../providers/root/root';
import { WelcomePage } from '../welcome/welcome';
import "rxjs/add/operator/map"
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import { MyApp } from '../../app/app.component';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // variables

  UserData = [];
  usern: String;
  usere: String;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public root: RootProvider, public menu: MenuController,
    public events: Events, private storage: Storage) {

    this.menu.swipeEnable(false);

  }

  public LogActionName: string = "MobileUserLogin";
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');


  }

  // functions
  // login function


  public login(useremail: String, userpassword: String) {
    console.log(`${this.root.APIURL}${this.LogActionName}?user_email=${useremail}&user_pwd=${userpassword}`);
    this.http.get(`${this.root.APIURL}${this.LogActionName}?user_email=${useremail}&user_pwd=${userpassword}`).map(res => <any>res.json())
      .subscribe(data => {
        if (data != null) {
          for (let i = 0; i < data.length; i++) {

            WelcomePage.userID = data[i].UserID;
            this.usern = data[i].UserName;
            this.usere = data[i].UserEmail;
            MyApp.username = data[i].UserName;
            MyApp.usermail = data[i].UserEmail;
            this.events.publish('userInfo', this.usern, this.usere);

            this.navCtrl.setRoot(TabsPage);

            //sends the username and email details to the app page side menu profile details
            this.storage.set('userInfo', { username: data[i].UserName, email: data[i].UserEmail });

          }
          console.log(WelcomePage.userID);
          console.log(data);

        } else {
          alert("Error in login");
        }
      });
  }

}




