import { Component, OnInit } from '@angular/core';
import { DataForm } from 'src/app/models/data-form.model';
import { DataFormService } from 'src/app/services/data-form.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  dataForm: DataForm = {
    id: '',
    first_name: '',
    last_name: '',
    age: '',
    gender: '',
    signs_and_symptoms: '',
    patient_type: '',
    // condition: '',
    test: '',
    disease_found: '',
    
  }
  submitted = false;

  constructor(private dataFormService: DataFormService) { }

  ngOnInit(): void {
  }

  saveDataForm(): void {
    const data = {
      id: this.dataForm.id,
      first_name: this.dataForm.first_name,
      last_name: this.dataForm.last_name,
      age: this.dataForm.age,
      gender: this.dataForm.gender,
      signs_and_symptoms: this.dataForm.signs_and_symptoms,
      patient_type: this.dataForm.patient_type,
      // condition: this.dataForm.condition,
      test: this.dataForm.test,
      disease_found: this.dataForm.disease_found,
    };
    this.dataFormService.create(data)
      .subscribe({
        next: (res) => {
          // console.log(res);
          this.submitted = true;
        },
        error: (err) => {
          // console.log(err);
        }
      })
  }
  newDataForm(): void {
    this.submitted = false;
    this.dataForm = {
      // id: '',
      first_name: '',
      last_name: '',
      age: '',
      gender: '',
      signs_and_symptoms: '',
      patient_type: '',
      // condition: '',
      test: '',
      disease_found: '',
    }
  }
}
