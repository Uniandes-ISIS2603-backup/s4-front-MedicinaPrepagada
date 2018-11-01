import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoDetailComponent } from './tarjeta-credito-detail/tarjeta-credito-detail.component';
import { TarjetaCreditoListComponent } from './tarjeta-credito-list/tarjeta-credito-list.component';
import {TarjetaCreditoService} from './tarjeta-credito.service';
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
  providers:[
      TarjetaCreditoService
  ],
  declarations: [TarjetaCreditoDetailComponent, TarjetaCreditoListComponent],
  exports: [TarjetaCreditoListComponent],
  bootstrap: [TarjetaCreditoListComponent, TarjetaCreditoDetailComponent]  
})
export class TarjetaCreditoModule { }
