/**
 * Created by umut.taherzadeh on 2017-02-04.
 */

import {Injectable}              from '@angular/core';
import {ServiceCaller} from "../utils/service.caller";

@Injectable()
export class LoginService {

    constructor(private caller: ServiceCaller) {}

    login(params, success, fail): void {
        this.caller.call("LoginService_login", params, success, fail);
    }
}