/**
 * Created by umut.taherzadeh on 2017-01-27.
 */

import {Component} from "@angular/core/src/metadata/directives";
import {Router} from "@angular/router";

@Component({
    selector: 'app-router',
    templateUrl: './router.component.html',
    styleUrls: ['./router.component.css']
})
export class RouterComponent {
    constructor(public router: Router) {
    };
}


