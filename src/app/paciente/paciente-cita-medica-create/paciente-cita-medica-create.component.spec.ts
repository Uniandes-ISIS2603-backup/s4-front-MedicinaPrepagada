import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCitaMedicaCreateComponent } from './paciente-cita-medica-create.component';

describe('PacienteCitaMedicaCreateComponent', () => {
  let component: PacienteCitaMedicaCreateComponent;
  let fixture: ComponentFixture<PacienteCitaMedicaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteCitaMedicaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteCitaMedicaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
