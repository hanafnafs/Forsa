import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MallsPage } from './malls';

@NgModule({
  declarations: [
    MallsPage,
  ],
  imports: [
    IonicPageModule.forChild(MallsPage),
  ],
})
export class MallsPageModule {}
