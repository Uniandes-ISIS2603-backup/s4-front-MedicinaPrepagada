import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaMedicaDetailComponent } from './cita-medica-detail.component';

describe('CitaMedicaDetailComponent', () => {
  let component: CitaMedicaDetailComponent;
  let fixture: ComponentFixture<CitaMedicaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaMedicaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaMedicaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
