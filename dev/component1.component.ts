import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteParams} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {Component1MainComponent} from './comp1-main.component';
import {Component1SubComponent} from './comp2-sub.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    template: `
        <h1>This is Component 1</h1>
        <div>
           The source was: {{source}}
        </div>
        <div>
            Optional: {{optional}}
        </div>
        <div><a [routerLink]="['Component1Main']">Main</a></div>
        <div><a [routerLink]="['Component1Sub']">Sub</a></div>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
      {path: '/', name: 'Component1Main', component: Component1MainComponent, useAsDefault: true},
      {path: '/subroute', name: 'Component1Sub', component: Component1SubComponent}
])
export class Component1Component implements OnInit {
    source: string;
    optional: string;

    constructor(private _routeParams: RouteParams) {}

    ngOnInit():any {
        this.source = this._routeParams.get('source')
        this.optional = this._routeParams.get('optional')
    }
}
