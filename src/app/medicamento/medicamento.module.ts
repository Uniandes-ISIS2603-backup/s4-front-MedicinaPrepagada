import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MedicamentoService} from './medicamento.service';
import { MedicamentoListComponent } from '../medicamento/medicamento-list/medicamento-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MedicamentoDetailComponent } from './medicamento-detail/medicamento-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [MedicamentoListComponent, MedicamentoDetailComponent],
  providers:[MedicamentoService],
  exports: [MedicamentoListComponent],
  bootstrap: [MedicamentoListComponent]
})
export class MedicamentoModule { }
