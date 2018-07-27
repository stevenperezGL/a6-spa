import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class HomeService {
  private readonly domain = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  private api(url: string, params: any, responseType: string = 'application/json') {
    return this.http.post(
      `${this.domain}${url}`,
      params,
      { headers: { responseType }}
    );
  }

  public doRequest() {
    return this.api(`/demo`, { param1: 'test' })
      .pipe(
        map((res: any) => {
          console.log('RES', res);
          return res;
        }),
        catchError(err => {
          console.log('ERR', err);
          return of(err);
        })
      );
  }
}
