import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoFarmaciaComponent } from './medicamento-farmacia.component';

describe('MedicamentoFarmaciaComponent', () => {
  let component: MedicamentoFarmaciaComponent;
  let fixture: ComponentFixture<MedicamentoFarmaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoFarmaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
