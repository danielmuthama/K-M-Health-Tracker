import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataForm } from '../models/data-form.model';
const API_URL = 'http://127.0.0.1:8000/api/data/';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<DataForm[]> {
    return this.http.get<DataForm[]>(API_URL);
  }
  getById(id: string): Observable<DataForm> {
    return this.http.get<DataForm>(`${API_URL}${id}/`);
  }
  create(dataForm: DataForm): Observable<DataForm> {
    return this.http.post<DataForm>(API_URL, dataForm);
  }
  update(id: string, data: any): Observable<DataForm> {
    return this.http.put<DataForm>(`${API_URL}${id}/`, data);
  }
  delete(id: string): Observable<DataForm> {
    return this.http.delete<DataForm>(`${API_URL}/${id}/`);
  }
  deleteAll(): Observable<DataForm> { 
    return this.http.delete<DataForm>(API_URL);
  }
  findByTitle(title: string): Observable<DataForm> {
    return this.http.get<DataForm>(`${API_URL}?title=${title}`);
  }
}
