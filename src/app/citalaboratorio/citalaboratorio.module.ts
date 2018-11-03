import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaLaboratorioListComponent } from './citalaboratorio-list/citalaboratorio-list.component';
import {CitaLaboratorioService} from './citalaboratorio.service'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CitaLaboratorioDetailComponent } from './citalaboratorio-detail/citalaboratorio-detail.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [CitaLaboratorioListComponent, CitaLaboratorioDetailComponent],
  providers:[CitaLaboratorioService],
  exports: [CitaLaboratorioListComponent, CitaLaboratorioDetailComponent],
  bootstrap: [CitaLaboratorioListComponent, CitaLaboratorioDetailComponent]
})
export class CitaLaboratorioModule { }
