import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginKemriAdminComponent } from './login-kemri-admin.component';

describe('LoginKemriAdminComponent', () => {
  let component: LoginKemriAdminComponent;
  let fixture: ComponentFixture<LoginKemriAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginKemriAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginKemriAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
