import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCitaslaboratorioComponent } from './paciente-citaslaboratorio.component';

describe('PacienteCitaslaboratorioComponent', () => {
  let component: PacienteCitaslaboratorioComponent;
  let fixture: ComponentFixture<PacienteCitaslaboratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteCitaslaboratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteCitaslaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
