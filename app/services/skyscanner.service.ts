import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//apiKey: ke883055594958501035836070646560
@Injectable()
export class SkyscannerService{
  private searchUrl: string;
  private apiKey: string;


  constructor(private _http:Http) {

  }

  searchCities(str:string, type="city") {
    // NEED TO CONVERT REQUEST TO JSONP SOMEHOW TO GET PAST CORS
    //this.apiKey = ke883055594958501035836070646560;
    this.searchUrl = ' http://partners.api.skyscanner.net/apiservices/xd/autosuggest/v1.0/GB/GBP/en-GB?query=rome&apiKey=ke883055594958501035836070646560';
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }
}
