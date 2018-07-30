import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, MenuController } from 'ionic-angular';
import { RootProvider } from '../../providers/root/root';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {
  productAdded = true;
  wishlistItems = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,
    public menu: MenuController, public root: RootProvider, private storage: Storage) {
      this.menu.swipeEnable(false);
    this.storage.get('productAdded')
      .then(
        data => {
          //this.wishlistItems = data.wishlist;
          console.log(data);
        }
      )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }


  toWelcomePage() {
    this.navCtrl.parent.select(0);
  }

}
