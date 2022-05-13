import { Component, OnInit } from '@angular/core';
import { DataForm } from 'src/app/models/data-form.model';
import { DataFormService } from 'src/app/services/data-form.service';
import { LabForm } from 'src/app/models/lab-form.model'; 
import { LabFormService } from 'src/app/services/lab-form.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  dataForm?: DataForm[];
  currentDataForm: DataForm = {};
  labForm?: LabForm[];
  currentLabForm: LabForm = {};
  currentIndex = -1;
  id = '';
  constructor(private dataFormService: DataFormService, private labFormService: LabFormService) { }

  ngOnInit(): void {
    this.retrieveDataForm();
    this.retrieveLabForm();
  }
  retrieveDataForm(): void {
    this.dataFormService.getAll()
      .subscribe({
        next: (data) => {
          this.dataForm = data;
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        } 
      })
  }
  retrieveLabForm(): void {
    this.labFormService.getAll()
    .subscribe({
      next: (lab) => {
        this.labForm = lab;
        console.log(lab);
      },
      error: (err) => {
        console.log(err);
      } 
    })
  }
  refreshList(): void {
    this.retrieveDataForm();
    this.currentDataForm = {};
    this.retrieveLabForm();
    this.currentLabForm = {};
    this.currentIndex = -1;
  }
  setActiveDataForm(dataForm: DataForm, index: number): void {
    this.currentDataForm = dataForm;
    this.currentIndex = index;
  }
  setActiveLabForm(labForm: LabForm, index: number): void {
    this.currentLabForm = labForm;
    this.currentIndex = index;
  }
}
