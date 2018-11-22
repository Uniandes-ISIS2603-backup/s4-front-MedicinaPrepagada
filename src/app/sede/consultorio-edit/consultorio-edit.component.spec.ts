import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorioEditComponent } from './consultorio-edit.component';

describe('ConsultorioEditComponent', () => {
  let component: ConsultorioEditComponent;
  let fixture: ComponentFixture<ConsultorioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultorioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultorioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
