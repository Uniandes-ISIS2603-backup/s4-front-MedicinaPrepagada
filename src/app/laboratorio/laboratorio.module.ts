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
import { LaboratorioEditComponent } from './laboratorio-edit/laboratorio-edit.component';
import {AgmCoreModule} from '@agm/core'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
          apiKey:'AIzaSyB6e8rof-WUMtAZd2ZfEmm1OBDQmjMDYUE'
      })
  ],
  declarations: [LaboratorioListComponent, LaboratorioDetailComponent, LaboratorioCreateComponent, LaboratorioEditComponent],
  providers:[LaboratorioService],
  exports: [LaboratorioListComponent, LaboratorioDetailComponent, LaboratorioEditComponent],
  bootstrap: [LaboratorioListComponent, LaboratorioDetailComponent, LaboratorioEditComponent]
})
export class LaboratorioModule { }