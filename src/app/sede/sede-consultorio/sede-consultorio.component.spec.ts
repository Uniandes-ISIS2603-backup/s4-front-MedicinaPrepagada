import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeConsultorioComponent } from './sede-consultorio.component';

describe('SedeConsultorioComponent', () => {
  let component: SedeConsultorioComponent;
  let fixture: ComponentFixture<SedeConsultorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedeConsultorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
