import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoEditComponent } from './medico-edit.component';

describe('MedicoEditComponent', () => {
  let component: MedicoEditComponent;
  let fixture: ComponentFixture<MedicoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
