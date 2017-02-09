/**
 * Created by umut.taherzadeh on 2016-12-28.
 */
import { Component } from '@angular/core';
import {LoginService} from "../../services/login/login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers : [LoginService],
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor (private loginService: LoginService) {}

    loginFunc() {
        this.loginService.login(null, function(resp) {
            // for successful callbacks

        }, function(error) {
            // for error callbacks
        });
    }
}
