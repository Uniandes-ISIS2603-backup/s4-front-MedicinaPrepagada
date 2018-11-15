import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeAddConsultorioComponent } from './sede-add-consultorio.component';

describe('SedeAddConsultorioComponent', () => {
  let component: SedeAddConsultorioComponent;
  let fixture: ComponentFixture<SedeAddConsultorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedeAddConsultorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeAddConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
