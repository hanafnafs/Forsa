import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController, MenuController, ToastController, LoadingController } from 'ionic-angular';
import { RootProvider } from '../../providers/root/root';
import { Http } from '@angular/http';
import { ModalPage } from '../modal/modal';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  imagePath = "http://services.edge-techno.com/forsa";
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides;
  SwipedTabsIndicator: any = null;
  tabs: any = [];
  news = [];
  newsDetails = [];


  public static userID;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public root: RootProvider, public modalCtrl: ModalController,
    public toastCtrl: ToastController, public menu: MenuController, private storage: Storage,
    public loadingCtrl: LoadingController) {

    this.menu.swipeEnable(true);
    console.log("welcome page here iam");
    this.tabs = ["Featured", "Coupons", "Summer Collection"];
    this.getNews();
    this.storage.get('userInfo')
      .then(
        data => {
          if (data == null) {
            this.presentToast(this.root.username, 'Welcome');
          }
          else if (data != null) {
            this.presentToast(data.username, 'Welcome back');
          }
        },
    )

  }


  //This function opens the modal page and pass the data of the product details to modal page

  public openModal(newsDetails) {
    const modalPage = this.modalCtrl.create(ModalPage, { cardDetails: newsDetails });
    modalPage.present();
  }

  //Blining the segment tabs to the slides starts here

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  selectTab(index) {
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
    // this condition is to avoid passing to incorrect index
    if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
    }

  }

  animateIndicator($event) {
    if (this.SwipedTabsIndicator)
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
  }

  //The function of get news from the API (actionNames of each)
  public newsActionName: string = "GetNews";



  //This is calling of the getNews function from the API


  public getNews() {

    console.log(`${this.root.APIURL}${this.newsActionName}?MemberID=${WelcomePage.userID}`);
    this.http.get(`${this.root.APIURL}${this.newsActionName}?MemberID=${WelcomePage.userID}`).map(res => res.json())
      .subscribe(data => {
        if (data != null) {
          for (let i = 0; i < data.length; i++) {
            this.news[i] = data[i];
          }
        } else {
          alert("No Data");
        }
      });
  }


  //This function displays the images from the API:

  public getImagePath(newsImage: String) {

    var newUrl = newsImage.slice(1);
    return this.imagePath + newUrl;
  }


  //This function displays the toast:

  presentToast(username: String, Welcome: String) {
    let toast = this.toastCtrl.create({
      message: Welcome + ', ' + username + '!',
      duration: 3000
    });
    toast.present();
  }
  
}




