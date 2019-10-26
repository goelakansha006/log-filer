import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { ICategorize } from '../models/categorize.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ILogData } from '../models/microsoft-auth.model';

const API_URL = environment.apiUrl;

@Injectable()
export class ShiftResolver implements Resolve<Observable<ILogData[]>> {
  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ILogData[]> {
    return this.http.get<ILogData[]>(`${API_URL}/shiftLog`);
  }
}
