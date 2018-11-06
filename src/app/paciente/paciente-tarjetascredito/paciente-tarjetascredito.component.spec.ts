import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteTarjetascreditoComponent } from './paciente-tarjetascredito.component';

describe('PacienteTarjetascreditoComponent', () => {
  let component: PacienteTarjetascreditoComponent;
  let fixture: ComponentFixture<PacienteTarjetascreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteTarjetascreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteTarjetascreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
