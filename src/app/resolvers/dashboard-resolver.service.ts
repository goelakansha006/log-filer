import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { ICategorize } from '../models/categorize.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable()
export class DashboardResolver implements Resolve<Observable<ICategorize[]>> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICategorize[]> {
    return this.http.get<ICategorize[]>(`${API_URL}/data_count?type=operator`);
  }
}
