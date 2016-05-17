import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {CanDeactivate} from 'angular/router';

@Component({
    template: `
        <h1>This is component 2<h1>
        <button (click)="onNavigate()">Take me to Component 1</button>
    `
})
export class Component2Component implements CanDeactivate {
    constructor(private _router: Router) {}

    onNavigate() {
        this._router.navigate(['Component1', {source: 'Component2'}]);
    }

    routerCanDeactivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        return alert("Sure?");
    }
}
