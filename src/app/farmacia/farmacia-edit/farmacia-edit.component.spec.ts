import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaEditComponent } from './farmacia-edit.component';

describe('FarmaciaEditComponent', () => {
  let component: FarmaciaEditComponent;
  let fixture: ComponentFixture<FarmaciaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmaciaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
