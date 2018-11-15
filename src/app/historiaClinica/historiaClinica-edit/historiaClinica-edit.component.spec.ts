/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaClinicaEditComponent } from './historiaClinica-edit.component';

describe('HistoriaClinicaEditComponent', () => {
  let component: HistoriaClinicaEditComponent;
  let fixture: ComponentFixture<HistoriaClinicaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaClinicaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaClinicaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
