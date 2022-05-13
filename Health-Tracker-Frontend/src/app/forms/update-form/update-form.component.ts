import { Component, OnInit } from '@angular/core';
import { DataForm } from 'src/app/models/data-form.model';
import { DataFormService } from 'src/app/services/data-form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
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

  constructor(private dataFormService: DataFormService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.dataFormService.getById(this.router.snapshot.params['id']).subscribe((result: any)=>{
      // console.log(result)

      this.dataForm.id = result.id;
      this.dataForm.first_name = result.first_name;
      this.dataForm.last_name = result.last_name;
      this.dataForm.age = result.age;
      this.dataForm.gender = result.gender;
      this.dataForm.signs_and_symptoms = result.signs_and_symptoms;
      // this.dataForm.condition = result.condition;
      this.dataForm.test = result.test;
      this.dataForm.disease_found = result.disease_found;
      this.dataForm.patient_type = result.patient_type;
    });
  };

  updateDataForm(): void {
    // console.log(this.dataForm);
    this.dataFormService.update(this.router.snapshot.params['id'], this.dataForm).subscribe(()=>{});
    this.goToData();
  };
  goToData($myParam: string = ''): void {
    const navigationDetails: string[] = ['moringaStaff/data'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.route.navigate(navigationDetails);
  }
};
