import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { RootProvider } from '../../providers/root/root';
import { Storage } from '@ionic/storage';
import { AppsettingsPage } from '../appsettings/appsettings';
import { MyApp } from '../../app/app.component';
import { FavPage } from '../fav/fav';


/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  userName: String;
  userEmail: String;
  @ViewChild(Nav) nav;

  constructor(public app : App , public navCtrl: NavController, public navParams: NavParams, public root: RootProvider, private storage: Storage) {
    this.storage.get('userInfo')
      .then(
        data => {
          if (data == null) {
            this.userName = this.root.username;
            this.userEmail = this.root.useremail;
          }
          else if (data != null) {
            this.userName = data.username;
            this.userEmail = data.email;
          }
        },
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  public logOut(){
    console.log('logging out');
    this.storage.clear();
    console.log('logged out');
    this.app.getRootNav().setRoot(MyApp);
    //document.querySelector("ion-tabbar")['style'].display = 'none';
  }

  public appSettings(){
    this.navCtrl.push(AppsettingsPage);
  }

  public goToFav(){

    this.navCtrl.push(FavPage);
  }

}
