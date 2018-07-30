import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RootProvider } from '../../providers/root/root';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { MyApp } from '../../app/app.component';

/* Generated class for the LandingPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  news = [];
  public static userID;
  userId;


  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
    public http: Http, public root: RootProvider, private storage: Storage) {

    this.menu.swipeEnable(false);
    console.log("landing page here iam");

    this.storage.get('userInfo')
      .then(
        data => {
          if (data == null) {
            setTimeout(() => {
              this.navCtrl.push(HomePage);
            }, 1000);
          }
          else if (data != null) {
            setTimeout(() => {
              MyApp.username = data.username;
              MyApp.usermail = data.email;
              this.navCtrl.push(TabsPage);
            }, 1000);
          }
        },
    )
  }
  
}
