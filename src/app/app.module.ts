import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import {PacienteModule} from './paciente/paciente.module';
import {MedicoModule} from './medico/medico.module';
import {MedicamentoModule} from './medicamento/medicamento.module';
import {SedeModule} from './sede/sede.module';
import {LaboratorioModule} from './laboratorio/laboratorio.module';
import {AdministradorModule} from './administrador/administrador.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing-module/app-routing.module';

import {FormsModule} from '@angular/forms';
import {HistoriaClinicaModule} from './historiaClinica/historiaClinica.module';
import {OrdenMedicaModule} from './ordenMedica/ordenMedica.module';

import {TarjetaCreditoModule} from './tarjeta-credito/tarjeta-credito.module';



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
    AdministradorModule,
    HistoriaClinicaModule,
    OrdenMedicaModule,
    TarjetaCreditoModule,
    FormsModule,
    BrowserAnimationsModule,
      ToastrModule.forRoot() 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
