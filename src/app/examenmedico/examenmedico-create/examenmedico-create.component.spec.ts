import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenMedicoCreateComponent } from './examenmedico-create.component';

describe('ExamenMedicoCreateComponent', () => {
  let component: ExamenMedicoCreateComponent;
  let fixture: ComponentFixture<ExamenMedicoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenMedicoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenMedicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
