import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { ServerResponse } from '../interface/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ReduceService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  generateShortUrl(originalURL: string) {
    const url: string = `${this.baseUrl}/reduce`; 
    return this.http.post<ServerResponse>(url, {url: originalURL})
      .pipe(
        catchError( error => of(error))
      );
  }

  getOriginalURL(shortUrl: string) {
    const url: string = `${ this.baseUrl }/reduce/${ shortUrl }`;
    return this.http.get<ServerResponse>(url)
      .pipe(
        catchError( error => of(error.ok))
      );
  }
}
