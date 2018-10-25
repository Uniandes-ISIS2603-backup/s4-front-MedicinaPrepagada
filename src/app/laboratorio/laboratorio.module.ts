import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaboratorioListComponent } from './laboratorio-list/laboratorio-list.component';
import {LaboratorioService} from './laboratorio.service'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [LaboratorioListComponent],
  providers:[LaboratorioService],
  exports: [LaboratorioListComponent],
  bootstrap: [LaboratorioListComponent]
})
export class LaboratorioModule { }
