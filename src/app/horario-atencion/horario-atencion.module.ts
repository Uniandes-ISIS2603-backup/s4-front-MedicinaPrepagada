import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {HorarioAtencionService} from './horarioAtencion.service';
import { HorarioAtencionListComponent } from './horario-atencion-list/horario-atencion-list.component';
import { HorarioAtencionDetailComponent } from './horario-atencion-detail/horario-atencion-detail.component';




@NgModule({
  imports: [
    CommonModule,
     BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [HorarioAtencionListComponent, HorarioAtencionDetailComponent],
  
    providers: [HorarioAtencionService],

  exports: [HorarioAtencionListComponent, HorarioAtencionDetailComponent],
  bootstrap: [HorarioAtencionListComponent, HorarioAtencionDetailComponent]
})
export class HorarioAtencionModule { }
