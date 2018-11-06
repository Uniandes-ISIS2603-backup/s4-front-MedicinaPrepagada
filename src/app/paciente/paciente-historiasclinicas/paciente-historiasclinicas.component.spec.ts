import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteHistoriasclinicasComponent } from './paciente-historiasclinicas.component';

describe('PacienteHistoriasclinicasComponent', () => {
  let component: PacienteHistoriasclinicasComponent;
  let fixture: ComponentFixture<PacienteHistoriasclinicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteHistoriasclinicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteHistoriasclinicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
