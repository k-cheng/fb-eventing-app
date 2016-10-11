import { Component } from '@angular/core';

@Component({
    moduleId:module.id, // lets us use relative pathing for templateUrl
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent { }
