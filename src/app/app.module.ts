import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from "./components/login-umut/login.component";
import {TopbarComponent} from "./components/topbar/topbar.component";
import {LeftMenuComponent} from "./components/leftmenu/leftmenu.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        TopbarComponent,
        LeftMenuComponent/** new components should be added **/

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [TopbarComponent,LeftMenuComponent] /** to start login screen, it has been changed from AppComponent to LoginComponent **/
})
export class AppModule {
}
