import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoFarmaciaAddComponent } from './medicamento-farmacia-add.component';

describe('MedicamentoFarmaciaAddComponent', () => {
  let component: MedicamentoFarmaciaAddComponent;
  let fixture: ComponentFixture<MedicamentoFarmaciaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoFarmaciaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoFarmaciaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
