import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoringaComponent } from './moringa.component';

describe('MoringaComponent', () => {
  let component: MoringaComponent;
  let fixture: ComponentFixture<MoringaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoringaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoringaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
