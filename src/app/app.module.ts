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
import {LoginService} from "./components/login/login.service";
import {UserComponent} from "./components/account/user/user.component";

const router : Routes = [
    {
        path : '',
        component : RouterComponent
    },
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'surec',
        component : AnalizSurecComponent
    },
    {
        path : 'user',
        component : UserComponent
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
        AnalizSurecComponent,
        QDocPageComponent,
        QDocStatementComponent,
        QDocEditorComponent
        AnalizSurecComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(router)
    ],
    providers: [LoginService],
    bootstrap: [MainComponent] /** to start login screen, it has been changed from AppComponent to LoginComponent **/
})
export class AppModule {
}
