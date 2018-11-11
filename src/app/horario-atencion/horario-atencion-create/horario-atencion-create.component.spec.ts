import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioAtencionCreateComponent } from './horario-atencion-create.component';

describe('HorarioAtencionCreateComponent', () => {
  let component: HorarioAtencionCreateComponent;
  let fixture: ComponentFixture<HorarioAtencionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioAtencionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioAtencionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
