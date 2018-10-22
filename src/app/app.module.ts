import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PacienteModule} from './paciente/paciente.module';

import { AppComponent } from './app.component';
import { MedicoComponent } from './medico/medico.component';
import { MedicoListComponent } from './medico/medico-list/medico-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    MedicoListComponent
  ],
  imports: [
    BrowserModule,
    PacienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
