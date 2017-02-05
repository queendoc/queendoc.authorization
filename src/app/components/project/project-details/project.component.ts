/**
 * Created by umut.taherzadeh on 2017-02-05.
 */

import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectDetailService} from "../../../services/project/project-details/project.details.service";

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent  implements OnInit, OnDestroy {
    private sub: any;
    private project : Object = {};

    constructor(private route: ActivatedRoute, private service : ProjectDetailService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var oid = params['oid'];
            var me = this;
            debugger;
            this.service.getProject({"oid" : oid}, function(project) {
                me.project = project;
            }, function() {

            })


        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
