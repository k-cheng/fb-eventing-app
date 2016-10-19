import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
    moduleId:module.id, // lets us use relative pathing for templateUrl
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {

  searchQuery:string;

  constructor(private _eventService:EventService) {

  }

  searchEvents() {
    this._eventService.searchEvents(this.searchQuery).subscribe(res => {
      console.log(res);
    });
    console.log(this.searchQuery)
  }
}
