import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import {PacienteModule} from './paciente/paciente.module';
import {MedicoModule} from './medico/medico.module';
import {MedicamentoModule} from './medicamento/medicamento.module';
import {SedeModule} from './sede/sede.module';
import {HorarioAtencionModule} from './horario-atencion/horario-atencion.module';

import {LaboratorioModule} from './laboratorio/laboratorio.module';
import {AdministradorModule} from './administrador/administrador.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing-module/app-routing.module';

import {FormsModule} from '@angular/forms';
import {HistoriaClinicaModule} from './historiaClinica/historiaClinica.module';
import {OrdenMedicaModule} from './ordenMedica/ordenMedica.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    PacienteModule,
    MedicoModule,
    LaboratorioModule,
    MedicamentoModule,
    SedeModule,
      HorarioAtencionModule,
    AdministradorModule,
    HistoriaClinicaModule,
    OrdenMedicaModule,
    FormsModule,
    BrowserAnimationsModule,
      ToastrModule.forRoot() 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
