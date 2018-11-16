/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './ingreso-login/ingreso-login.component';
import { RegisterComponent } from './ingreso-register/ingreso-register.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers:[LoginComponent, RegisterComponent],
  exports: [LoginComponent, RegisterComponent],
  bootstrap: [LoginComponent, RegisterComponent]
})
export class IngresoModule { }

