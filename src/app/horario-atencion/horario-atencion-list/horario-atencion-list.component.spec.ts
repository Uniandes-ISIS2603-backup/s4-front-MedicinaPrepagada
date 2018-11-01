import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioAtencionListComponent } from './horario-atencion-list.component';

describe('HorarioAtencionListComponent', () => {
  let component: HorarioAtencionListComponent;
  let fixture: ComponentFixture<HorarioAtencionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioAtencionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioAtencionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
