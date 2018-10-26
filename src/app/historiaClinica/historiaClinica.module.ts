/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaClinicaService } from './historiaClinica.service';
import { HistoriaClinicaListComponent } from '../historiaClinica/historiaClinica-list/historiaClinica-list.component'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {HistoriaClinicaDetailComponent} from './historiaClinica-detail/historiaClinica-detail.component';

@NgModule({
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
            ],
  declarations: [HistoriaClinicaListComponent, HistoriaClinicaDetailComponent],
  providers: [HistoriaClinicaService],
  exports:[HistoriaClinicaListComponent, HistoriaClinicaDetailComponent],
  bootstrap: [HistoriaClinicaListComponent, HistoriaClinicaDetailComponent]
})
export class HistoriaClinicaModule { }

