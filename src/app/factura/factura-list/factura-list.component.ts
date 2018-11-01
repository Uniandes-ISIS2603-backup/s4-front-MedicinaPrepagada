import { Component, OnInit } from '@angular/core';

import {FacturaService} from '../factura.service';
import {Factura} from '../factura';
//import {FacturaDetail} from '../factura-detail';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {

  constructor(private facturaService: FacturaService) { }
    
    facturas: Factura[];
    factura_id: number;
    selectedFactura : Factura;
    getFacturas(): void {
        this.facturaService.getFacturas()
            .subscribe(facturas => this.facturas = facturas);
    }
   // onSelected(factura_id: number):void {
    //    this.factura_id = factura_id;
   //     this.selectedFactura = new FacturaDetail();
   //     this.getFacturaDetail();     
   // }
   // getFacturaDetail(): void {
     //   this.facturaService.getFacturaDetail(this.factura_id)
    //        .subscribe(selectedFactura => {
     //           this.selectedFactura = selectedFactura
     //       });
    // }

  ngOnInit() {
      this.getFacturas();
  }
}
