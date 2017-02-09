/**
 * Created by umut.taherzadeh on 2017-02-05.
 */

import {Injectable}              from '@angular/core';
import {ServiceCaller} from "../../utils/service.caller";

@Injectable()
export class ProjectRealmService {

    constructor(private caller: ServiceCaller) {}

    getProjects(params, success, fail): void {
        this.caller.call("ProjectRealmService_getProjects", params, success, fail);
    }

}