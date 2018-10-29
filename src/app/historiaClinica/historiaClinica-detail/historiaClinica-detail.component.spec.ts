/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaClinicaDetailComponent } from './historiaClinica-detail.component';

describe('HistoriaClinicaDetailComponent', () => {
  let component: HistoriaClinicaDetailComponent;
  let fixture: ComponentFixture<HistoriaClinicaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaClinicaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaClinicaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

