import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { of, Observable, throwError } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
const API_URL = environment.api.base;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  public Get(endpoint: string): Observable<any> {
    return this.http
      .get(API_URL + endpoint)
      .pipe(
        map(response => {
          const json = response.toString();
          return json;
        })
      )
      .pipe(catchError(this.handleError));
  }

  // public Fetch(endpoint: string): Observable<Response> {

  //   return fromFetch(API_URL + endpoint).pipe(
  //     switchMap(response => {
  //       if (response.ok) {
  //         // OK return data
  //         return response.json();
  //       } else {
  //         // Server is returning a status requiring the client to try something else.
  //         return of({ error: true, message: `Error ${response.status}` });
  //       }
  //     }),
  //     catchError(err => {
  //       // Network or other error, handle appropriately
  //       console.error(err);
  //       return of({ error: true, message: err.message });
  //     })
  //   );

  // }


  public Post(endpoint: string, data: any): Observable<any> {
    return this.http
      .post(API_URL + endpoint, data)
      .pipe(catchError(this.handleError));
  }

  public Delete(endpoint: string) {
    return this.http
      .delete(API_URL + endpoint)
      .pipe(catchError(this.handleError));
  }

  // handle any error encounted while sending http request
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }
}
