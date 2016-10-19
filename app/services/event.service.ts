import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// app ID: 1652150125096432
// app secret: d4c219f0fba0e37100d6cb03d1e43999
// client token: 91431623e2327a145d30894c4e1e4448

let URL = 'http://graph.facebook.com/me';

@Injectable()
export class EventService {
  private searchUrl: string;
  private apiKey: string;


  constructor(private _http:Http) {

  }

  getInfo(accessToken: string) {
    return this._http.get(URL + '?access_token=' + 1652150125096432)
      .map(res => res.json())
  }

  searchEvents(str:string, type="event") {
    // NEED TO CONVERT REQUEST TO JSONP SOMEHOW TO GET PAST CORS

    this.searchUrl = ' http://graph.facebook.com/1652150125096432/photos';
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }
}
