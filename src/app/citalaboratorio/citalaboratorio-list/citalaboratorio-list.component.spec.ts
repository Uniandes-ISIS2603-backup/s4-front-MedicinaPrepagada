import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaLaboratorioListComponent } from './citalaboratorio-list.component';

describe('CitaLaboratorioListComponent', () => {
  let component: CitaLaboratorioListComponent;
  let fixture: ComponentFixture<CitaLaboratorioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaLaboratorioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaLaboratorioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
