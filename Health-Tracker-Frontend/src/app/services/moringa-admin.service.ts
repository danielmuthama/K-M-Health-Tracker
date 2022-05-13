import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoringaAdmin } from '../models/moringa-admin';
import { Observable } from 'rxjs';
const API_URL = "http://127.0.0.1:8000/api-auth/login/";
@Injectable({
  providedIn: 'root'
})
export class MoringaAdminService {
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<MoringaAdmin[]> {
    return this.http.get<MoringaAdmin[]>(API_URL);
  }
  create(moringaAdmin: MoringaAdmin): Observable<MoringaAdmin> {
    return this.http.post<MoringaAdmin>(API_URL, moringaAdmin);
  }
}