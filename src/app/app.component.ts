import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    /** Settings sent to the reveal directive */
    readonly revealSettings = { reset: true };

    constructor() {}
}
