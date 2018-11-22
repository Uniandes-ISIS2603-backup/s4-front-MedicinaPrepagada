import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenMedicoLaboratorioComponent } from './examenmedico-laboratorio.component';

describe('ExamenmedicoLaboratorioComponent', () => {
  let component: ExamenMedicoLaboratorioComponent;
  let fixture: ComponentFixture<ExamenMedicoLaboratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenMedicoLaboratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenMedicoLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
