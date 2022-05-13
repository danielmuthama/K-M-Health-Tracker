import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-moringa-admin',
  templateUrl: './login-moringa-admin.component.html',
  styleUrls: ['./login-moringa-admin.component.css']
})
export class LoginMoringaAdminComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.http.post('http://localhost:2000/api/login/', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(() => this.router.navigate(['moringaAdmin/data']));
  }
}