import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialidadCreateComponent } from './especialidad-create/especialidad-create.component';
import { EspecialidadListComponent } from './especialidad-list/especialidad-list.component';
import { EspecialidadDetailComponent } from './especialidad-detail/especialidad-detail.component';
import {EspecialidadService} from './especialidad.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EspecialidadEditComponent } from './especialidad-edit/especialidad-edit.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [EspecialidadCreateComponent, EspecialidadListComponent, EspecialidadDetailComponent, EspecialidadEditComponent],
  providers:[EspecialidadService],
  exports:[EspecialidadListComponent, EspecialidadDetailComponent, EspecialidadCreateComponent],
  bootstrap: [EspecialidadListComponent, EspecialidadDetailComponent, EspecialidadCreateComponent]
})
export class EspecialidadModule { }
