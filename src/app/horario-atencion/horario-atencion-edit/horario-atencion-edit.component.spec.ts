import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioAtencionEditComponent } from './horario-atencion-edit.component';

describe('HorarioAtencionEditComponent', () => {
  let component: HorarioAtencionEditComponent;
  let fixture: ComponentFixture<HorarioAtencionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioAtencionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioAtencionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
