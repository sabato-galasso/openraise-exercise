import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ProcessHttpmsgService} from './process-httpmsg.service';
import {baseURL, baseURLDevelopersItalia} from '../shared/baseUrl';
import {Feature} from '../models/Feature';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpmsgService) {}

  getFeatures(): Observable<Feature[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.get<Feature[]>(baseURL + '/feature', httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getSoftwareById(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<any>(baseURLDevelopersItalia + '/jekyll/software/_search?q=_id:'+id , httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
