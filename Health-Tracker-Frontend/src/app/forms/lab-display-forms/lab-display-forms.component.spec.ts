import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDisplayFormsComponent } from './lab-display-forms.component';

describe('LabDisplayFormsComponent', () => {
  let component: LabDisplayFormsComponent;
  let fixture: ComponentFixture<LabDisplayFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabDisplayFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabDisplayFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
