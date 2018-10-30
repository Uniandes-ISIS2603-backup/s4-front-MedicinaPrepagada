import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PacienteService} from './paciente.service';
import { PacienteListComponent } from '../paciente/paciente-list/paciente-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PacienteDetailComponent } from '../paciente/paciente-detail/paciente-detail.component';
import {PacienteCreateComponent} from './paciente-create/paciente-create.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
    declarations: [PacienteListComponent, PacienteDetailComponent, PacienteCreateComponent],
  providers:[PacienteService],
    exports: [PacienteListComponent, PacienteDetailComponent, PacienteCreateComponent],
    bootstrap: [PacienteListComponent, PacienteDetailComponent, PacienteCreateComponent]
})
export class PacienteModule { }
