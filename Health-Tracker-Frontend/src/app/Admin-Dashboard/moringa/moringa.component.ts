import { Component, OnInit } from '@angular/core';
import { DataForm } from 'src/app/models/data-form.model';
import { DataFormService } from 'src/app/services/data-form.service';
import { HttpClient } from '@angular/common/http';
import { Emitters } from 'src/app/emitters/emitters'; 

@Component({
  selector: 'app-moringa',
  templateUrl: './moringa.component.html',
  styleUrls: ['./moringa.component.css']
})
export class MoringaComponent implements OnInit {
  dataForm?: DataForm[];
  currentDataForm: DataForm = {};
  currentIndex = -1;
  id = '';
  message = '';

  constructor(
    private dataFormService: DataFormService,
    private http: HttpClient
    ) { }


  ngOnInit(): void {
    this.http.get('http://localhost:2000/api/user/', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Welcome ${res.name} to the Moringa Admin Panel`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
    this.retrieveDataForm();
  }
  retrieveDataForm(): void {
    this.dataFormService.getAll()
      .subscribe({
        next: (data) => {
          this.dataForm = data;
          // console.log(data);
        },
        error: (err) => {
          // console.log(err);
        } 
      })
  }
  refreshList(): void {
    this.retrieveDataForm();
    this.currentDataForm = {};
    this.currentIndex = -1;
  }
  setActiveDataForm(dataForm: DataForm, index: number): void {
    this.currentDataForm = dataForm;
    this.currentIndex = index;
  }
}

