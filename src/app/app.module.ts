import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import {PacienteModule} from './paciente/paciente.module';
import {MedicoModule} from './medico/medico.module';
import {MedicamentoModule} from './medicamento/medicamento.module';
import {SedeModule} from './sede/sede.module';
import {AdministradorModule} from './administrador/administrador.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing-module/app-routing.module';

import {FormsModule} from '@angular/forms';



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
    MedicamentoModule,
    SedeModule,
    AdministradorModule,
    FormsModule,
    BrowserAnimationsModule,
      ToastrModule.forRoot() 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
