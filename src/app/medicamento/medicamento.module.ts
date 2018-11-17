import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MedicamentoService} from './medicamento.service';
import { MedicamentoListComponent } from '../medicamento/medicamento-list/medicamento-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MedicamentoDetailComponent } from './medicamento-detail/medicamento-detail.component';
import { MedicamentoCreateComponent } from './medicamento-create/medicamento-create.component';
import {FarmaciaModule} from '../farmacia/farmacia.module';
import { MedicamentoEditComponent } from './medicamento-edit/medicamento-edit.component';
import { MedicamentoFarmaciaComponent } from './medicamento-farmacia/medicamento-farmacia.component';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FarmaciaModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [MedicamentoListComponent, MedicamentoDetailComponent, MedicamentoCreateComponent, MedicamentoEditComponent, MedicamentoFarmaciaComponent],
  providers:[MedicamentoService],
  exports: [MedicamentoListComponent]
})
export class MedicamentoModule { }
