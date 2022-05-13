import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMoringaAdminComponent } from './login-moringa-admin.component';

describe('LoginMoringaAdminComponent', () => {
  let component: LoginMoringaAdminComponent;
  let fixture: ComponentFixture<LoginMoringaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMoringaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMoringaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
