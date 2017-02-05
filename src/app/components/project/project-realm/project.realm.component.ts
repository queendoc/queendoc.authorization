/**
 * Created by umut.taherzadeh on 2017-02-05.
 */
import {Component} from '@angular/core';
import {ProjectRealmService} from "../../../services/project/project-realm/project.realm.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-project-realm',
    templateUrl: './project.realm.component.html',
    styleUrls: ['./project.realm.component.css'],
    providers: [ProjectRealmService]
})
export class ProjectRealmComponent {

    projects = [];

    constructor(private realmService: ProjectRealmService, private router : Router) {

        var me = this;
        this.realmService.getProjects(null, function (resp) {
            debugger;
            me.projects = resp;

        }, function (error) {

            debugger;
        });

    }

    public updateProject(project) {
        // TODO constant yap route
        debugger;
        this.router.navigate(["/project-details", "project.oid"]);
    }
    public deleteProject() {
        this.router.navigate(["/project-details", "project.oid"]);
        // TODO constant yap route
    }

}
