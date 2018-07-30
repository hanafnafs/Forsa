import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events, ToastController } from 'ionic-angular';
import { RootProvider } from '../../providers/root/root';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import {ModalProPage} from '../modal-pro/modal-pro';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  imagePath = "http://services.edge-techno.com/forsa";
  like: any;
  dislike: any;
  disableButton;
  disable;
  oldLike: number;
  oldDislike: number;
  newsData = [];
  addRemove = 0;
  items = [];
  news = [];
  visible: Boolean = true;
  msg: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public events: Events, public toastCtrl: ToastController, public root: RootProvider, private storage: Storage,
    public http: Http, private socialSharing: SocialSharing) {

    const cardDetails = this.navParams.get('cardDetails');
    this.newsData = cardDetails;
    this.like = cardDetails.LikeCount;
    this.dislike = cardDetails.DisLikeCount;
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }


  ionViewWillLoad() {
    console.log('modal page here iam')
  }



  //This function displays the images from the API:

  public getImagePath(newsImage: String) {

    var newUrl = newsImage.slice(1);
    return this.imagePath + newUrl;
  }

  public share() {
    this.socialSharing.share('Hey check out this amazing store', 'check out more of this store deals and promotions just on Forsa App')  //store name, prmotions description
      .then(() => {
          // Success!
      }).catch(() => {
          // Error!
      })
  }

  public goToModalPro(){
    this.navCtrl.setRoot(ModalProPage);
  }

  public toggle() {
    this.visible = !this.visible;
    if(this.visible == false){
      this.msg = 'Added to Faved Stores!';
      this.presentToast(this.msg);
    }
    else{
      this.msg = "Removed from Faved Stores!";
      this.presentToast(this.msg);

    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }













  //This are the functions which increase or decrease the count of likes and dislikes:
  /*public addLike() {
    this.oldLike = this.like;
    if (this.dislike > this.oldDislike) {
      this.like++;
      this.dislike--;
      this.disableButton = true;
      this.disable = false;
    }
    else if (this.dislike == this.oldDislike) {
      this.like++;
      this.disableButton = true;
      this.disable = false;
    }
    else {
      this.like++;
      this.disableButton = true;
      this.disable = false;
    }

  }

  public addDisLike() {
    this.oldDislike = this.dislike;
    if (this.like > this.oldLike) {
      this.like--;
      this.dislike++;
      this.disable = true;
      this.disableButton = false;
    }
    else if (this.like == this.oldLike) {
      this.dislike++;
      this.disable = false;
    }
    else {
      this.dislike++;
      this.disable = true;
      this.disableButton = false;
    }
  }

  addToWishlist(product) {
    if (this.addRemove == 0) {
      let toast = this.toastCtrl.create({
        message: 'Added to Wishlist',
        duration: 2000      
      });
      this.items.push(product);
      toast.present();
      this.addRemove = 1;
      console.log('stored')
    }
    else {
      let toast = this.toastCtrl.create({
        message: 'Removed from Wishlist',
        duration: 2000
      });
      toast.present();
      this.addRemove = 0;
      this.items.splice(product);
      console.log('deleted')
    }
    this.storage.set('productAdded', {wishlist: this.items});
  }*/





}
