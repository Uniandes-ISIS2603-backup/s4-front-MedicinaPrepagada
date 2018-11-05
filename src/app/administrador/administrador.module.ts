/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorService } from './administrador.service';
import { AdministradorListComponent } from '../administrador/administrador-list/administrador-list.component'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AdministradorDetailComponent} from './administrador-detail/administrador-detail.component';
import {AdministradorCreateComponent} from './administrador-create/administrador-create.component';

@NgModule({
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
            ],
  declarations: [AdministradorListComponent, AdministradorDetailComponent, AdministradorCreateComponent],
  providers: [AdministradorService],
  exports:[AdministradorListComponent, AdministradorDetailComponent, AdministradorCreateComponent],
  bootstrap: [AdministradorListComponent, AdministradorDetailComponent, AdministradorCreateComponent]
})
export class AdministradorModule { }
