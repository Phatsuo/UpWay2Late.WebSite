import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'

import { Observable } from 'rxjs/Observable';

import { INews } from '../models/news';

@Injectable()
export class DataService {

    headers = new Headers();

    constructor(private _http: Http) {
        this.headers.append('Content-Type', 'application/json');
    }

    getNews(): Observable<Array<INews>> {        
        return this._http.get('/api/data/getNews', { headers: this.headers })
            .map((responseData) => {
                return responseData.json();
            })
            .map((data: Array<INews>) => {
                return data;
            });
    }
}
