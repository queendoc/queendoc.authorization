/**
 * Created by umut.taherzadeh on 2017-02-04.
 */

import {Injectable}              from '@angular/core';
import {Http, Response, Headers, RequestOptions}          from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceCaller {

    private DISPATCHER = 'http://localhost:8080/dispatch/';
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers}); // Create a request option

    constructor(private http: Http) {
    }

    public call(service: string, param?: Object, success?: Function, fail?: Function, config?: Object): void {
        // TODO empty checks

        let parameters = {
            "serviceTime": new Date(),
            "service": service,
            "parameters": param
        };

        (this.http.post(this.DISPATCHER, JSON.stringify(parameters), this.options).map(function (response: Response) {
            if (success) {
                console.log("success");
                let body = response.json();
                success(body.data || {});
            }
        }).catch(function (error: any) {
            let errMsg: string;
            if (error instanceof Response) {
                const body = error.json() || '';
                const err = body.error || JSON.stringify(body);
                errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            } else {
                errMsg = error.message ? error.message : error.toString();
            }
            console.error(errMsg);
            if(fail) {
                fail(errMsg);
            }
            return Observable.throw(errMsg);
        })).subscribe();

    }
}