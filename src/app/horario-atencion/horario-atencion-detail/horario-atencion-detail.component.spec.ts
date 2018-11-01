import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioAtencionDetailComponent } from './horario-atencion-detail.component';

describe('HorarioAtencionDetailComponent', () => {
  let component: HorarioAtencionDetailComponent;
  let fixture: ComponentFixture<HorarioAtencionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioAtencionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioAtencionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
