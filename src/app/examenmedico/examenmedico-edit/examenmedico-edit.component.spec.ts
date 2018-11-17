import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenMedicoEditComponent } from './examenmedico-edit.component';

describe('ExamenMedicoEditComponent', () => {
  let component: ExamenMedicoEditComponent;
  let fixture: ComponentFixture<ExamenMedicoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenMedicoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenMedicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
