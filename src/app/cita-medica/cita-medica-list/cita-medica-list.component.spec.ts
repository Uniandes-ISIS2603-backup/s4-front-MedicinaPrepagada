import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaMedicaListComponent } from './cita-medica-list.component';

describe('CitaMedicaListComponent', () => {
  let component: CitaMedicaListComponent;
  let fixture: ComponentFixture<CitaMedicaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaMedicaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaMedicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
