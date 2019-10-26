import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ILogData } from '../models/microsoft-auth.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategorize } from '../models/categorize.model';
import { IIdObject } from '../models/login.model';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}

  public getAllRecords(): Observable<ILogData[]> {
    return this.http.get<ILogData[]>(API_URL + '/data');
  }

  public searchResults(query: string): Observable<any> {

    return this.http.get<any>(
      `${API_URL}/search?startDate=2019-09-15&endDate=2019-09-25&query=${query}`
    );
  }

  // API: POST /todos
  public createRecord(todo: ILogData) {
    return this.http.post<any>(`${API_URL}/data`, todo);
  }

  // API: GET /todos/:id
  public getRecorById(todoId: string) {
    // will use this.http.get()
  }

  // API: PUT /todos/:id
  public updateRecord(todo: ILogData): Observable<any> {
    return this.http.put<any>(`${API_URL}/data/${todo._id}`, todo);
  }

  public getCategoryByType(type: string): Observable<ICategorize[]> {
    return this.http.get<ICategorize[]>(`${API_URL}/data_count?type=${type}`);
  }

  // DELETE /todos/:id
  public deleteRecordById(todoId: string) {
    // will use this.http.delete()
  }

  public getArea() {
    return this.http.get<IIdObject[]>(`${API_URL}/area`);
  }

  public getValues(distinctBy: string) {
    return this.http.get<string[]>(`${API_URL}/getDistinct?query=${distinctBy}`);
  }
}
