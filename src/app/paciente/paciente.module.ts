import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteListComponent } from '../Paciente/paciente-list/paciente-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PacienteListComponent],
  exports: [PacienteListComponent]
})
export class PacienteModule { }
