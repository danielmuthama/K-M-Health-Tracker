import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoringaRegisterComponent } from './moringa-register.component';

describe('MoringaRegisterComponent', () => {
  let component: MoringaRegisterComponent;
  let fixture: ComponentFixture<MoringaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoringaRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoringaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
