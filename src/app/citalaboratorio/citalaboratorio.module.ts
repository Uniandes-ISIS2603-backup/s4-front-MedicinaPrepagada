import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaLaboratorioListComponent } from './citalaboratorio-list/citalaboratorio-list.component';
import {CitaLaboratorioService} from './citalaboratorio.service'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CitaLaboratorioDetailComponent } from './citalaboratorio-detail/citalaboratorio-detail.component';
import { CitaLaboratorioCreateComponent } from './citalaboratorio-create/citalaboratorio-create.component';
import { CitaLaboratorioEditComponent } from './citalaboratorio-edit/citalaboratorio-edit.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [CitaLaboratorioListComponent, CitaLaboratorioDetailComponent, CitaLaboratorioCreateComponent, CitaLaboratorioEditComponent],
  providers:[CitaLaboratorioService],
  exports: [CitaLaboratorioListComponent, CitaLaboratorioDetailComponent, CitaLaboratorioCreateComponent, CitaLaboratorioEditComponent],
  bootstrap: [CitaLaboratorioListComponent, CitaLaboratorioDetailComponent, CitaLaboratorioCreateComponent, CitaLaboratorioEditComponent]
})
export class CitaLaboratorioModule { }
