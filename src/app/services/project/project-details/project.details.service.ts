/**
 * Created by umut.taherzadeh on 2017-02-05.
 */
import {Injectable} from "@angular/core";
import {ServiceCaller} from "../../utils/service.caller";


@Injectable()
export class ProjectDetailService {

    constructor(private caller: ServiceCaller) {
    }

    getProject(params : Object, success : Function, fail : Function): void {
        this.caller.call("ProjectDetailService_getProject", params, success, fail);
    }

    updateProject() {

    }

    deleteProject() {

    }

    saveProject() {

    }
}