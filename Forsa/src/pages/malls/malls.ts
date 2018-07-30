import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';



/**
 * Generated class for the MallsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-malls',
  templateUrl: 'malls.html',
})
export class MallsPage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides;
  SwipedTabsIndicator: any = null;
  tabs: any = [];
  enabled: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, public platform: Platform) {
    //this.gps();
    //this.isLocationEnabled();
    this.tabs = ["Malls", "Stores"];

  }

  ionViewDidLoad() {
    this.platform.ready().then(() => this.obtenerPosicion());
  }

  obtenerPosicion(): any {
    this.geolocation.getCurrentPosition().then(response => {
      console.log(response);
      console.log(response.coords.latitude);
      console.log(response.coords.longitude);
      this.enabled = true;
    })
      .catch(error => {
        console.log(error);
        this.enabled = false;
      })
  }
  /*ionViewWillEnter() {
    this.geolocation.getCurrentPosition().then((resp) => {
       //Call to your logic HERE
       console.log(resp.coords.latitude)
       console.log(resp.coords.longitude) 
    }).catch((error) => {
       alert(error);
       this.enabled = false;
    });
 }*/

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


}
