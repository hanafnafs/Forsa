import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RootProvider } from '../providers/root/root';
import { Http } from '@angular/http';
import { LandingPage } from '../pages/landing/landing';
import 'rxjs/add/operator/map'
import { Storage } from '@ionic/storage';
import { FavPage } from '../pages/fav/fav';
import { CategoriesPage } from '../pages/categories/categories';
import { AppsettingsPage } from '../pages/appsettings/appsettings';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = LandingPage;

  @ViewChild(Nav) nav;

  //The functions of tha API (actionNames of each):

  public catActionName: string = "GetNewsCategories";
  cats = [];
  name;
  mail;
  public static userID;
  static username;
  static usermail;

  //The image path in which we will rest of the path but without tilde:

  imagePath = "http://services.edge-techno.com/forsa";
  shownGroup = null;




  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public http: Http, public root: RootProvider, private storage: Storage) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.getCategories();

      this.storage.get('userInfo')
        .then(
          data => {

            if (data == null) {
              this.name = data.username;
            }
            else if (data != null) {
              console.log(data)
                 this.name = data.username;
                 this.mail = data.email;
            }
          },
      )
    });
    this.mail = MyApp.usermail;
    this.name = MyApp.username;

    //This gets the user data sent stored in native storage from login page:

    /* this.nativeStorage.getItem('userInfo')
       .then(
         data => {
           this.name = data.username;
           console.log(this.name);
           this.mail = data.email;
           console.log(this.mail);
           this.rootPage = WelcomePage;
         //  this.nav.setRoot(TabsPage);
 
           
         //  this.nav.setRoot(this.rootPage);
         },
         error => {
           this.rootPage = LandingPage;
        //   this.nav.setRoot(this.rootPage);
         }
       );
 
       this.nav.setRoot(TabsPage);*/
  }


  //This is calling of the getCategories function from the API:

  public getCategories() {

    console.log(`${this.root.APIURL}${this.catActionName}?MemberID=${MyApp.userID}`);
    this.http.get(`${this.root.APIURL}${this.catActionName}?MemberID=${MyApp.userID}`).map(res => res.json())
      .subscribe(data => {
        if (data != null) {
          this.cats = data;
          console.log(this.cats);
        } else {
          alert("No Data");
        }
      });

  }

  //This function displays the images from the API:

  public getImagePath(newsImage: String) {

    var newUrl = newsImage.slice(1);
    var urlFinal = this.imagePath + newUrl;
    return urlFinal;
  }


  // Navigation between pages functions

  public goToFav() {
    this.nav.push(FavPage);
  }

  public goToCats() {
    this.nav.push(CategoriesPage);
  }

  public goToSettings() {
    this.nav.push(AppsettingsPage);
  }
}

