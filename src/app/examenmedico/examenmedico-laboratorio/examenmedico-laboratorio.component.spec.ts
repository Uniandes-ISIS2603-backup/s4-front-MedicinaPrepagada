import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenmedicoLaboratorioComponent } from './examenmedico-laboratorio.component';

describe('ExamenmedicoLaboratorioComponent', () => {
  let component: ExamenmedicoLaboratorioComponent;
  let fixture: ComponentFixture<ExamenmedicoLaboratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenmedicoLaboratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenmedicoLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
