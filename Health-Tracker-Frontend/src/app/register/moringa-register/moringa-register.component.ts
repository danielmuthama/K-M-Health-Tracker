import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-moringa-register',
  templateUrl: './moringa-register.component.html',
  styleUrls: ['./moringa-register.component.css']
})
export class MoringaRegisterComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.http.post('http://localhost:2000/api/register/', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['moringaAdmin/data']));
  }
}
