import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExamenMedicoService} from './examenmedico.service';
import { ExamenMedicoListComponent } from '../examenmedico/examenmedico-list/examenmedico-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExamenMedicoDetailComponent } from './examenmedico-detail/examenmedico-detail.component';
import { ExamenMedicoCreateComponent } from './examenmedico-create/examenmedico-create.component';
import { ExamenMedicoEditComponent } from './examenmedico-edit/examenmedico-edit.component';
import { ExamenMedicoLaboratorioComponent } from './examenmedico-laboratorio/examenmedico-laboratorio.component';
import { ExamenMedicoLaboratorioAddComponent } from './examenmedico-laboratorio-add/examenmedico-laboratorio-add.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [ExamenMedicoListComponent, ExamenMedicoDetailComponent, ExamenMedicoCreateComponent, ExamenMedicoEditComponent, ExamenMedicoLaboratorioComponent, ExamenMedicoLaboratorioAddComponent],
  providers:[ExamenMedicoService],
  exports: [ExamenMedicoListComponent],
  bootstrap: [ExamenMedicoListComponent]
})
export class ExamenMedicoModule { }
