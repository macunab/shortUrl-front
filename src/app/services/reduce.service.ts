import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ServerResponse } from '../interface/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ReduceService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  generateShortUrl(originalURL: string) {
    const url: string = `${this.baseUrl}/api/reduce`; 
    return this.http.post(url, {originalURL});
  }

  getOriginalURL(shortUrl: string) {
    const url: string = `${ this.baseUrl }/api/reduce`;
    const params: HttpParams = new HttpParams();
    params.append('url-short', shortUrl);
    return this.http.get<ServerResponse>(url, { params });
  }
}
