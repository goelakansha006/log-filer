import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class PageResolve implements Resolve<any> {
  constructor(private http: HttpClient) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    if (route.data.pageUrl) {
      return this.getData(route.data.pageUrl);
    }
  }
  private getData(url: string) {
    return this.http.get(url.endsWith('.json') ? url : `${url}.json`).pipe(
      map(data => ({ data, error: null })),
      catchError(err => of({ data: null, error: err }))
    );
  }
}
