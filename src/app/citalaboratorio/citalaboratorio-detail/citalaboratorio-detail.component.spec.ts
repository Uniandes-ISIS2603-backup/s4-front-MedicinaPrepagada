import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaLaboratorioDetailComponent } from './citalaboratorio-detail.component';

describe('CitalaboratorioDetailComponent', () => {
  let component: CitaLaboratorioDetailComponent;
  let fixture: ComponentFixture<CitaLaboratorioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaLaboratorioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaLaboratorioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
