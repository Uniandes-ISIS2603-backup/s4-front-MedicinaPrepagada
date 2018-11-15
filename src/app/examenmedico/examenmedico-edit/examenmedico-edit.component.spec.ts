import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenmedicoEditComponent } from './examenmedico-edit.component';

describe('ExamenmedicoEditComponent', () => {
  let component: ExamenmedicoEditComponent;
  let fixture: ComponentFixture<ExamenmedicoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenmedicoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenmedicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
