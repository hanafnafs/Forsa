import { Component } from '@angular/core';

import { WelcomePage } from '../welcome/welcome';
import { AccountPage } from '../account/account';
import { WishlistPage } from '../wishlist/wishlist';
import { MallsPage } from '../malls/malls';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WelcomePage;
  tab2Root = MallsPage;
  tab3Root = WishlistPage;
  tab4Root = AccountPage;

  constructor() {



  }




}
