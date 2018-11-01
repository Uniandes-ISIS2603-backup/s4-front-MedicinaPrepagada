import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeDetailComponent } from './sede-detail.component';

describe('SedeDetailComponent', () => {
  let component: SedeDetailComponent;
  let fixture: ComponentFixture<SedeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
