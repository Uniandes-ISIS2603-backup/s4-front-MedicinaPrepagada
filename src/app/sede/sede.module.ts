import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SedeService} from './sede.service';
import { SedeListComponent } from './sede-list/sede-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [SedeListComponent],
    providers:[SedeService],

  exports: [SedeListComponent],
  bootstrap: [SedeListComponent]
})
export class SedeModule { }
