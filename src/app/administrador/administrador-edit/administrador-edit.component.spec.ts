/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorEditComponent } from './administrador-edit.component';

describe('AdministradorEditComponent', () => {
  let component: AdministradorEditComponent;
  let fixture: ComponentFixture<AdministradorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
