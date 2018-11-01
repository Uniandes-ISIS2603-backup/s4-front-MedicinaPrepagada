import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaService} from './factura.service'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { FacturaDetailComponent } from './factura-detail/laboratorio-detail.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [FacturaListComponent],
  providers:[FacturaService],
  exports: [FacturaListComponent],
  bootstrap: [FacturaListComponent]
})
export class FacturaModule { }
