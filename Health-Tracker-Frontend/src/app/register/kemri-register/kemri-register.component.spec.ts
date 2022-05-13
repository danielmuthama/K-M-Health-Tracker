import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemriRegisterComponent } from './kemri-register.component';

describe('KemriRegisterComponent', () => {
  let component: KemriRegisterComponent;
  let fixture: ComponentFixture<KemriRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KemriRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KemriRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
