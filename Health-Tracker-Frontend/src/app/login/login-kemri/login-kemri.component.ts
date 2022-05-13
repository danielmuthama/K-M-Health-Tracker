import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-kemri',
  templateUrl: './login-kemri.component.html',
  styleUrls: ['./login-kemri.component.css']
})
export class LoginKemriComponent implements OnInit {

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
    this.http.post('http://localhost:4000/api/login/', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(() => this.router.navigate(['kemriStaff/lab']));
  }

}
