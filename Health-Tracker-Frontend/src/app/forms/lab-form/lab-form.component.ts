import { Component, OnInit } from '@angular/core';
import { LabForm } from 'src/app/models/lab-form.model'; 
import { LabFormService } from 'src/app/services/lab-form.service';

@Component({
  selector: 'app-lab-form',
  templateUrl: './lab-form.component.html',
  styleUrls: ['./lab-form.component.css']
})
export class LabFormComponent implements OnInit {
  labForm: LabForm = {
    pk: '',
    sample_number: '',
    age: '',
    gender: '',
    signs_and_symptoms: '',
    patient_type: '',
    // condition: '',
    test: '',
    disease_found: '',
  }
  submitted = false;

  constructor(private labFormService: LabFormService) { }

  ngOnInit(): void {
  }
  
  saveLabForm(): void {
    const data = {
      // data_ptr: this.labForm.pk,
      sample_number: this.labForm.sample_number,
      age: this.labForm.age,
      gender: this.labForm.gender,
      signs_and_symptoms: this.labForm.signs_and_symptoms,
      patient_type: this.labForm.patient_type,
      // condition: this.labForm.condition,
      test: this.labForm.test,
      disease_found: this.labForm.disease_found,
    }
    this.labFormService.create(data)
      .subscribe({
        next: (response) => {
          // console.log(response);
          this.submitted = true;
        },
        error: (err) => {
          // console.log(err);
        }
      })
  }
  newLabForm(): void {
    this.submitted = false;
    this.labForm = {
      pk: '',
      sample_number: '',
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
