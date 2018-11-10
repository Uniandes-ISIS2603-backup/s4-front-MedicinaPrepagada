import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaLaboratorioCreateComponent } from './citalaboratorio-create.component';

describe('CitaLaboratorioCreateComponent', () => {
  let component: CitaLaboratorioCreateComponent;
  let fixture: ComponentFixture<CitaLaboratorioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaLaboratorioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaLaboratorioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
