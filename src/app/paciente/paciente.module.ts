import {NgModule, ViewRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PacienteService} from './paciente.service';
import { PacienteListComponent } from '../paciente/paciente-list/paciente-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PacienteDetailComponent } from '../paciente/paciente-detail/paciente-detail.component';
import {PacienteCreateComponent} from './paciente-create/paciente-create.component';
import { PacienteTarjetascreditoComponent } from './paciente-tarjetascredito/paciente-tarjetascredito.component';
import { PacienteCitaslaboratorioComponent } from './paciente-citaslaboratorio/paciente-citaslaboratorio.component';
import { PacienteFacturasComponent } from './paciente-facturas/paciente-facturas.component';
import { PacienteCitasmedicasComponent } from './paciente-citasmedicas/paciente-citasmedicas.component';
import { PacienteHistoriasclinicasComponent } from './paciente-historiasclinicas/paciente-historiasclinicas.component';
import { PacienteTarjetaCreditoAddComponent } from '../paciente/paciente-tarjeta-credito-add/paciente-tarjeta-credito-add.component';
import { PacienteEditComponent } from '../paciente/paciente-edit/paciente-edit.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
    declarations: [PacienteListComponent, PacienteDetailComponent, PacienteCreateComponent, PacienteTarjetascreditoComponent, PacienteCitaslaboratorioComponent, PacienteFacturasComponent, PacienteCitasmedicasComponent, PacienteHistoriasclinicasComponent, PacienteTarjetaCreditoAddComponent, PacienteEditComponent],
    providers: [PacienteService],
    exports: [PacienteListComponent, PacienteDetailComponent, PacienteCreateComponent, PacienteTarjetascreditoComponent, PacienteCitasmedicasComponent, PacienteFacturasComponent, PacienteCitasmedicasComponent, PacienteHistoriasclinicasComponent, PacienteTarjetaCreditoAddComponent, PacienteEditComponent],
    bootstrap: [PacienteListComponent, PacienteDetailComponent, PacienteCreateComponent]
})
export class PacienteModule { }
