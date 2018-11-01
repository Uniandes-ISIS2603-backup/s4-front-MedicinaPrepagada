import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaMedicaListComponent } from './cita-medica-list/cita-medica-list.component';
import { CitaMedicaDetailComponent } from './cita-medica-detail/cita-medica-detail.component';
import { CitaMedicaCreateComponent } from './cita-medica-create/cita-medica-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CitaMedicaListComponent, CitaMedicaDetailComponent, CitaMedicaCreateComponent]
})
export class CitaMedicaModule { }
