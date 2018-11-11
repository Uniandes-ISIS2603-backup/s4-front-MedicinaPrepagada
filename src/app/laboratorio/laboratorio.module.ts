import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaboratorioListComponent } from './laboratorio-list/laboratorio-list.component';
import {LaboratorioService} from './laboratorio.service'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LaboratorioDetailComponent } from './laboratorio-detail/laboratorio-detail.component';
import { LaboratorioCreateComponent } from './laboratorio-create/laboratorio-create.component';
import { AppRoutingModule } from '../routing-module/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [LaboratorioListComponent, LaboratorioDetailComponent, LaboratorioCreateComponent],
  providers:[LaboratorioService],
  exports: [LaboratorioListComponent, LaboratorioDetailComponent],
  bootstrap: [LaboratorioListComponent, LaboratorioDetailComponent]
})
export class LaboratorioModule { }
