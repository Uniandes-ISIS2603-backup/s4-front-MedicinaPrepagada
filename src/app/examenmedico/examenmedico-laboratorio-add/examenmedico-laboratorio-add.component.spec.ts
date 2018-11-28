import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenMedicoLaboratorioAddComponent } from './examenmedico-laboratorio-add.component';

describe('ExamenmedicoLaboratorioAddComponent', () => {
  let component: ExamenMedicoLaboratorioAddComponent;
  let fixture: ComponentFixture<ExamenMedicoLaboratorioAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenMedicoLaboratorioAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenMedicoLaboratorioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
