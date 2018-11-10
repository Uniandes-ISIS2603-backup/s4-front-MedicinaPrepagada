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



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [SedeListComponent, SedeDetailComponent, SedeCreateComponent],
    providers:[SedeService],

  exports: [SedeListComponent, SedeDetailComponent, SedeCreateComponent],
  bootstrap: [SedeListComponent, SedeDetailComponent, SedeCreateComponent]
})
export class SedeModule { }