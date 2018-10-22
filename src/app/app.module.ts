import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PacienteModule} from './paciente/paciente.module';
import {MedicoModule} from './medico/medico.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PacienteModule,
    MedicoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
