import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenMedicoDetailComponent } from './examenmedico-detail.component';

describe('ExamenMedicoDetailComponent', () => {
  let component: ExamenMedicoDetailComponent;
  let fixture: ComponentFixture<ExamenMedicoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenMedicoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenMedicoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
