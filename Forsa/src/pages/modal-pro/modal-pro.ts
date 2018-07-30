import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-modal-pro',
  templateUrl: 'modal-pro.html',
})
export class ModalProPage {
  visible = true;
  msg: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private socialSharing: SocialSharing, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalProPage');
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

  
  public toggle() {
    this.visible = !this.visible;
    if(this.visible == false){
      this.msg = 'Added to wishlist!';
      this.presentToast(this.msg);
    }
    else{
      this.msg = "Removed from wishlist!";
      this.presentToast(this.msg);

    }
  }
  public share() {
    this.socialSharing.share('Hey check out this amazing store', 'check out more of this store deals and promotions just on Forsa App')  //store name, prmotions description
      .then(() => {
          // Success!
      }).catch(() => {
          // Error!
      })
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
