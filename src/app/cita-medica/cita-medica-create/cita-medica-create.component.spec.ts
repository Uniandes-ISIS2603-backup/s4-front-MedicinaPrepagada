import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaMedicaCreateComponent } from './cita-medica-create.component';

describe('CitaMedicaCreateComponent', () => {
  let component: CitaMedicaCreateComponent;
  let fixture: ComponentFixture<CitaMedicaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaMedicaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaMedicaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
