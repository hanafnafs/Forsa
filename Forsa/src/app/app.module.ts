import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RootProvider } from '../providers/root/root';
import { WelcomePage } from '../pages/welcome/welcome';
import {ModalPage} from '../pages/modal/modal';
import {LandingPage} from '../pages/landing/landing';
import {TabsPage} from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { AccountPage } from '../pages/account/account';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { MallsPage } from '../pages/malls/malls';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { AppsettingsPage } from '../pages/appsettings/appsettings';
import { FavPage } from '../pages/fav/fav';
import { CategoriesPage } from '../pages/categories/categories';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ModalProPage } from '../pages/modal-pro/modal-pro';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    WelcomePage,
    ModalPage,
    LandingPage,
    TabsPage,
    AccountPage,
    WishlistPage,
    MallsPage,
    AppsettingsPage,
    FavPage, 
    CategoriesPage,
    ModalProPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    WelcomePage,
    ModalPage,
    LandingPage,
    TabsPage,
    AccountPage,
    WishlistPage,
    MallsPage,
    AppsettingsPage,
    FavPage,
    CategoriesPage,
    ModalProPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RootProvider,
    NativeStorage,
    Diagnostic,
    Geolocation
  ]
})
export class AppModule { }
