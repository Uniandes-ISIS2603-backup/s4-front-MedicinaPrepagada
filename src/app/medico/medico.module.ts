import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MedicoService} from './medico.service';
import { MedicoListComponent } from './medico-list/medico-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MedicoDetailComponent } from './medico-detail/medico-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [MedicoListComponent, MedicoDetailComponent],
  providers:[MedicoService],
  exports:[MedicoListComponent, MedicoDetailComponent],
  bootstrap: [MedicoListComponent, MedicoDetailComponent]
})
export class MedicoModule { }
