import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaService} from './factura.service'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import { FacturaCreateComponent } from './factura-create/factura-create.component';




@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [FacturaListComponent, FacturaDetailComponent, FacturaCreateComponent],
  providers:[FacturaService],
  exports: [FacturaListComponent, FacturaDetailComponent],
  bootstrap: [FacturaListComponent, FacturaDetailComponent]
})
export class FacturaModule { }
