import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemriComponent } from './kemri.component';

describe('KemriComponent', () => {
  let component: KemriComponent;
  let fixture: ComponentFixture<KemriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KemriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KemriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
