import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteFacturasComponent } from './paciente-facturas.component';

describe('PacienteFacturasComponent', () => {
  let component: PacienteFacturasComponent;
  let fixture: ComponentFixture<PacienteFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteFacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
