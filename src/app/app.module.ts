import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PacienteModule} from './paciente/paciente.module';
import {MedicoModule} from './medico/medico.module';
import { MedicamentoModule } from './medicamento/medicamento.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PacienteModule,
    MedicoModule,
    MedicamentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
