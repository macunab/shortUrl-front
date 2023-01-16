import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReduceService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  generateShortUrl(originalURL: string) {
    const url: string = `${this.baseUrl}/reduce`; 
    this.http.post(url, {originalURL});
  }

  getOriginalURL(shortUrl: string) {
    const url: string = '';
    const params: HttpParams = new HttpParams();
    params.append('url-short', shortUrl);
    this.http.get(url, { params });
  }
}
