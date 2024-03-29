    import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaMedicaListComponent } from './cita-medica-list/cita-medica-list.component';
import { CitaMedicaDetailComponent } from './cita-medica-detail/cita-medica-detail.component';
import { CitaMedicaCreateComponent } from './cita-medica-create/cita-medica-create.component';
import {CitaMedicaService} from './cita-medica.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CitaMedicaEditComponent } from './cita-medica-edit/cita-medica-edit.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [CitaMedicaListComponent, CitaMedicaDetailComponent, CitaMedicaCreateComponent, CitaMedicaEditComponent],
  providers:[CitaMedicaService],
  exports:[CitaMedicaListComponent, CitaMedicaDetailComponent, CitaMedicaCreateComponent],
  bootstrap: [CitaMedicaListComponent, CitaMedicaDetailComponent, CitaMedicaCreateComponent]
})
export class CitaMedicaModule { }
