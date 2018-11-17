import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaMedicaEditComponent } from './cita-medica-edit.component';

describe('CitaMedicaEditComponent', () => {
  let component: CitaMedicaEditComponent;
  let fixture: ComponentFixture<CitaMedicaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaMedicaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaMedicaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
