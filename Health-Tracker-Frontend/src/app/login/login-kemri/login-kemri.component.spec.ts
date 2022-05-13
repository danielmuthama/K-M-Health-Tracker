import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginKemriComponent } from './login-kemri.component';

describe('LoginKemriComponent', () => {
  let component: LoginKemriComponent;
  let fixture: ComponentFixture<LoginKemriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginKemriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginKemriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
