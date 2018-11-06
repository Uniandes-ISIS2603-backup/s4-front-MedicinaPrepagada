/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaClinicaCreateComponent } from './historiaClinica-create.component';

describe('HistoriaClinicaCreateComponent', () => {
  let component: HistoriaClinicaCreateComponent;
  let fixture: ComponentFixture<HistoriaClinicaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaClinicaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaClinicaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
