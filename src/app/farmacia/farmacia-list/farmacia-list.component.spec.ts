import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaListComponent } from './farmacia-list.component';

describe('FarmaciaListComponent', () => {
  let component: FarmaciaListComponent;
  let fixture: ComponentFixture<FarmaciaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmaciaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
