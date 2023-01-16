import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  spinnerSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  spinnerMap: Map<string, boolean> = new Map<string, boolean>();

  constructor() { }

  setLoading(loading: boolean, url: string) {
    if(!url) {
      throw new Error('The url is required');
    }
    if(loading) {
      this.spinnerSub.next(true);
      this.spinnerMap.set(url, loading);
    } else if (loading === false && this.spinnerMap.has(url)) {
      this.spinnerMap.delete(url);
    }
    if(this.spinnerMap.size === 0) {
      this.spinnerSub.next(false);
    }
  }
}
