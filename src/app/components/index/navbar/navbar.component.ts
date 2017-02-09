/**
 * Created by umut.taherzadeh on 2017-01-27.
 */

import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    private navigationOptions : Array<Object>;
    private selectedNavigation : string;
    private param;

    constructor(private router : Router) {

        this.navigationOptions = [
            {"text" : "Document Realm", "value" : ""},
            {"text" : "Projects Realm", "value" : "/project-realm"},
            {"text" : "Document Desktop", "value" : ""},
            {"text" : "Access wizard", "value" : ""},
            {"text" : "Stakeholders", "value" : ""},
            {"text" : "Visual Artistics / Cosmetic Preferences", "value" : ""},
            {"text" : "Setting", "value" : ""}
        ];

        this.selectedNavigation = this.navigationOptions[0]["value"];
    }

    loader() {
        // TODO null check
        var nav = [];
        nav[0] = '/' + this.selectedNavigation;
        if(this.param) {
            nav[1] = this.param;
        }
        this.router.navigate(nav);
    }
}
