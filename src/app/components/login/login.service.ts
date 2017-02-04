/**
 * Created by umut.taherzadeh on 2017-02-04.
 */

import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
    private loginUrl = 'http://localhost:8080/dispatch/login';  // URL to web API
    constructor (private http: Http) {}

    login() : Observable<Response> {
        return this.http.get(this.loginUrl).map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        debugger;
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        debugger;
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}