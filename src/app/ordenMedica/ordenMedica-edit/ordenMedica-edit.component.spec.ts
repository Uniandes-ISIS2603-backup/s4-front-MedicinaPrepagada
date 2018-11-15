/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenMedicaEditComponent } from './ordenMedica-edit.component';

describe('OrdenMedicaEditComponent', () => {
  let component: OrdenMedicaEditComponent;
  let fixture: ComponentFixture<OrdenMedicaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenMedicaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenMedicaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

