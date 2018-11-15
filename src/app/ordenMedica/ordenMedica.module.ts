/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenMedicaService } from './ordenMedica.service';
import { OrdenMedicaListComponent } from '../ordenMedica/ordenMedica-list/ordenMedica-list.component'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {OrdenMedicaDetailComponent} from './ordenMedica-detail/ordenMedica-detail.component';
import {OrdenMedicaCreateComponent} from './ordenMedica-create/ordenMedica-create.component';
import {OrdenMedicaEditComponent} from './ordenMedica-edit/ordenMedica-edit.component';

@NgModule({
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
            ],
  declarations: [OrdenMedicaListComponent, OrdenMedicaDetailComponent, OrdenMedicaCreateComponent, OrdenMedicaEditComponent],
  providers: [OrdenMedicaService],
  exports:[OrdenMedicaListComponent, OrdenMedicaDetailComponent, OrdenMedicaCreateComponent],
  bootstrap: [OrdenMedicaListComponent, OrdenMedicaDetailComponent, OrdenMedicaCreateComponent]
})
export class OrdenMedicaModule { }

