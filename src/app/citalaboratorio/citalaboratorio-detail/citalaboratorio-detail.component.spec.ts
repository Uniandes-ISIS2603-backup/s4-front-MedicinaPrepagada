import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitalaboratorioDetailComponent } from './citalaboratorio-detail.component';

describe('CitalaboratorioDetailComponent', () => {
  let component: CitalaboratorioDetailComponent;
  let fixture: ComponentFixture<CitalaboratorioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitalaboratorioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitalaboratorioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
