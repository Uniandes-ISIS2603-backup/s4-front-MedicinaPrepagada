/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriasOrdenMedicaComponent } from './historiaClinica-ordenesmedicas.component';

describe('HistoriasOrdenMedicaComponent', () => {
  let component: HistoriasOrdenMedicaComponent;
  let fixture: ComponentFixture<HistoriasOrdenMedicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriasOrdenMedicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriasOrdenMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
