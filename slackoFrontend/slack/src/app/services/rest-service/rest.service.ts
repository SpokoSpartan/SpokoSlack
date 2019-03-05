import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {API_URL} from '../../config';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  URL = API_URL + '/api/v1/';

  constructor(private http: HttpClient) {
  }

  async get(url: string) {
    return await this.http.get<any>(this.URL + url, { withCredentials: true })
      .pipe(
        catchError(this.handleError)
      ).toPromise();
  }

  post(url: string, item: any): Observable<any> {
    return this.http.post<any>(this.URL + url, item, { withCredentials: true })
      .pipe(
        catchError(this.handleError)
      );
  }

  update(url: string, id: number, item: any) {
    return this.http.post<any>(this.URL + url + '/update/' + id, item, { withCredentials: true })
      .pipe(
        catchError(this.handleError)
      );
  }

  remove(url: string, id: number) {
    return this.http.delete<any>(this.URL + url + id, { withCredentials: true })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `exception was: ${error.error.message}`);
    }
    return throwError(error);
  }
}
