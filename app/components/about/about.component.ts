import { Component } from '@angular/core';

@Component({
    moduleId:module.id, // lets us use relative pathing for templateUrl
    selector: 'about',
    templateUrl: 'about.component.html'
})
export class AboutComponent { }
