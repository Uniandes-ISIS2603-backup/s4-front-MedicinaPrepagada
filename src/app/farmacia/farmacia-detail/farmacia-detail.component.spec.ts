import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaDetailComponent } from './farmacia-detail.component';

describe('FarmaciaDetailComponent', () => {
  let component: FarmaciaDetailComponent;
  let fixture: ComponentFixture<FarmaciaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmaciaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
