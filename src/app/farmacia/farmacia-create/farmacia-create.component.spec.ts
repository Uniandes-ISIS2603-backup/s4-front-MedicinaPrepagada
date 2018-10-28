import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaCreateComponent } from './farmacia-create.component';

describe('FarmaciaCreateComponent', () => {
  let component: FarmaciaCreateComponent;
  let fixture: ComponentFixture<FarmaciaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmaciaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
