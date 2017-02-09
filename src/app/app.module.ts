import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {RouterComponent} from "./components/index/router/router.component";
import {MainComponent} from "./components/index/main/main.component";
import {NavbarComponent} from "./components/index/navbar/navbar.component";
import {MenuComponent} from "./components/index/menu/menu.component";
import {AnalizSurecComponent} from "./components/docrealm/analiz-surec-dokumani/analiz.surec.component";
import {QDocPageComponent} from "./components/document/page/qd-page.component";
import {QDocStatementComponent} from "./components/document/statement/qd-statment.component";
import {QDocEditorComponent} from "./components/document/editor/qd-editor.component";
import {LoginService} from "./services/login/login.service";
import {UserComponent} from "./components/account/user/user.component";
import {ServiceCaller} from "./services/utils/service.caller";
import {ProjectComponent} from "./components/project/project-details/project.component";
import {ProjectRealmComponent} from "./components/project/project-realm/project.realm.component";
import {ProjectRealmService} from "./services/project/project-realm/project.realm.service";
import {ProjectDetailService} from "./services/project/project-details/project.details.service";

const router: Routes = [
    {
        path: '',
        component: RouterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'project-realm',
        component: ProjectRealmComponent
        // children: [ use it when you have view within a view
        //     {path: 'detail/:oid', component: ProjectComponent},
        // ]
    },
    {
        path: 'project-details/:oid',
        component: ProjectComponent
    },
    {
        path: 'surec',
        component: AnalizSurecComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
];

@NgModule({
    declarations: [
        /** new components should be added **/
        MainComponent,
        RouterComponent,
        NavbarComponent,
        MenuComponent,

        LoginComponent,

        UserComponent,

        AnalizSurecComponent,

        QDocPageComponent,
        QDocStatementComponent,
        QDocEditorComponent,
        AnalizSurecComponent,
        UserComponent
        QDocEditorComponent,

        ProjectComponent,
        ProjectRealmComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(router)
    ],
    providers: [
        ServiceCaller,
        LoginService,
        ProjectRealmService,
        ProjectDetailService
    ],
    bootstrap: [MainComponent]
})
export class AppModule {
}
