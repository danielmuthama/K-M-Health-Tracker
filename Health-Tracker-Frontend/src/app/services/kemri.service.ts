import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginMoringaComponent } from '../login/login-moringa/login-moringa.component';
const API_URL = 'http://127.0.0.1:2000/moringa/admin';

@Injectable({
  providedIn: 'root'
})
export class KemriService {

  constructor() { }
}
