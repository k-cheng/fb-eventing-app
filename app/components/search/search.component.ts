import { Component } from '@angular/core';
import { SkyscannerService } from '../../services/skyscanner.service';

@Component({
    moduleId:module.id, // lets us use relative pathing for templateUrl
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {

  searchQuery:string;

  constructor(private _skyscannerService:SkyscannerService) {

  }

  searchCities() {
    this._skyscannerService.searchCities(this.searchQuery).subscribe(res => {
      console.log(res);
    });
    console.log(this.searchQuery)
  }
}
