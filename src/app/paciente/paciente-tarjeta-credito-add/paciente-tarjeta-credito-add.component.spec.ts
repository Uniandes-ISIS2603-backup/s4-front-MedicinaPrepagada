import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteTarjetaCreditoAddComponent } from './paciente-tarjeta-credito-add.component';

describe('PacienteTarjetaCreditoAddComponent', () => {
  let component: PacienteTarjetaCreditoAddComponent;
  let fixture: ComponentFixture<PacienteTarjetaCreditoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteTarjetaCreditoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteTarjetaCreditoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
