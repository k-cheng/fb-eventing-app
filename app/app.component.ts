import { Component } from '@angular/core';
import { SkyscannerService } from './services/skyscanner.service';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [ SkyscannerService ]
})
export class AppComponent { }
