import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMoringaComponent } from './login-moringa.component';

describe('LoginMoringaComponent', () => {
  let component: LoginMoringaComponent;
  let fixture: ComponentFixture<LoginMoringaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMoringaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMoringaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
