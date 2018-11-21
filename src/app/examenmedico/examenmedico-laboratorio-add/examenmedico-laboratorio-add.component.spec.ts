import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenmedicoLaboratorioAddComponent } from './examenmedico-laboratorio-add.component';

describe('ExamenmedicoLaboratorioAddComponent', () => {
  let component: ExamenmedicoLaboratorioAddComponent;
  let fixture: ComponentFixture<ExamenmedicoLaboratorioAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenmedicoLaboratorioAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenmedicoLaboratorioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
