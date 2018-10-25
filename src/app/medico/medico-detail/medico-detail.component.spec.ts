import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoDetailComponent } from './medico-detail.component';

describe('MedicoDetailComponent', () => {
  let component: MedicoDetailComponent;
  let fixture: ComponentFixture<MedicoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
