import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCitasmedicasComponent } from './paciente-citasmedicas.component';

describe('PacienteCitasmedicasComponent', () => {
  let component: PacienteCitasmedicasComponent;
  let fixture: ComponentFixture<PacienteCitasmedicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteCitasmedicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteCitasmedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
