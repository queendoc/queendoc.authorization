/**
 * Created by umut.taherzadeh on 2016-12-28.
 */
import { Component } from '@angular/core';
import {LoginService} from "./login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers : [LoginComponent],
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    login : string;
    errorMessage : string;
    constructor (private loginService: LoginService) {}
    title = 'app works!';

    loginFunc() {
        debugger;
        this.loginService.login()
            .subscribe(
                heroes => this.login = "logged in",
                error =>  this.errorMessage = <any>error);
    }
}
