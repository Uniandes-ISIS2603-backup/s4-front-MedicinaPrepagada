import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenMedicoListComponent } from './examenmedico-list.component';

describe('ExamenMedicoListComponent', () => {
  let component: ExamenMedicoListComponent;
  let fixture: ComponentFixture<ExamenMedicoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenMedicoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenMedicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
