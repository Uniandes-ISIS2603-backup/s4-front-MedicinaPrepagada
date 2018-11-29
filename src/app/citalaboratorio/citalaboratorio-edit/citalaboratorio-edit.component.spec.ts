import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaLaboratorioEditComponent } from './citalaboratorio-edit.component';

describe('CitaLaboratorioEditComponent', () => {
  let component: CitaLaboratorioEditComponent;
  let fixture: ComponentFixture<CitaLaboratorioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaLaboratorioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaLaboratorioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
