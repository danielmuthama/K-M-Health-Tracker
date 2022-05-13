import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LabForm } from '../models/lab-form.model';
const API_URL = 'http://127.0.0.1:8000/api/lab/';

@Injectable({
  providedIn: 'root'
})
export class LabFormService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<LabForm[]> {
    return this.http.get<LabForm[]>(API_URL);
  }
  get(id: string): Observable<LabForm> {
    return this.http.get<LabForm>(`${API_URL}/${id}`);
  }
  create(labForm: LabForm): Observable<LabForm> {
    return this.http.post<LabForm>(API_URL, labForm);
  }
  update(id: string, labForm: LabForm): Observable<LabForm> {
    return this.http.put<LabForm>(`${API_URL}/${id}`, labForm);
  }
  delete(id: string): Observable<LabForm> {
    return this.http.delete<LabForm>(`${API_URL}/${id}`);
  }
  deleteAll(): Observable<LabForm> {
    return this.http.delete<LabForm>(API_URL);
  }
  findByTitle(title: string): Observable<LabForm> {
    return this.http.get<LabForm>(`${API_URL}?title=${title}`);
  }
}
