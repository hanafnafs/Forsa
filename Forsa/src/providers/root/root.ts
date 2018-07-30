import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

/*
  Generated class for the RootProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RootProvider {
  public APIURL = "http://services.edge-techno.com/ForsaMobilApi/api/APP/";
  public username;
  public useremail;
  public arr = [];

  constructor(public http: Http, public events: Events) {
    console.log('Hello RootProvider Provider');
    this.events.subscribe('userInfo',(usern,usere) => {
      this.username = usern;
      this.useremail = usere;
    });
  }

}
