import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    template: `
        <h1>This is component 2<h1>
        <button (click)="onNavigate()">Take me to Component 1</button>
    `
})
export class Component2Component {

    constructor(private _router: Router) {}

    onNavigate() {
        this._router.navigate(['Component1', {source: 'Component2'}]);
    }

}
