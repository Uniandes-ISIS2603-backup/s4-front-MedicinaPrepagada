import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {SedeService} from './sede.service';

import { SedeListComponent } from './sede-list/sede-list.component';
import { SedeDetailComponent } from './sede-detail/sede-detail.component';
import { SedeCreateComponent } from './sede-create/sede-create.component';
import { SedeConsultorioComponent } from './sede-consultorio/sede-consultorio.component';
import { SedeAddConsultorioComponent } from './sede-add-consultorio/sede-add-consultorio.component';
import { SedeEditComponent } from './sede-edit/sede-edit.component';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [SedeListComponent, SedeDetailComponent, SedeCreateComponent, SedeConsultorioComponent, SedeAddConsultorioComponent, SedeEditComponent],
    providers:[SedeService],

  exports: [SedeListComponent, SedeDetailComponent, SedeCreateComponent,SedeConsultorioComponent],
  bootstrap: [SedeListComponent, SedeDetailComponent, SedeCreateComponent,SedeConsultorioComponent]
})
export class SedeModule { }