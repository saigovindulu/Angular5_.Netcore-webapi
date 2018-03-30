import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { parse } from 'url';


@Injectable()
export class HomeService {

  constructor(public http: Http) { }

  getJsonData() {
    let body = JSON.stringify(parse);
    var result = this.http.get("http://localhost:5000/api/people").map(res => res.json());
    return result;
  }
}
