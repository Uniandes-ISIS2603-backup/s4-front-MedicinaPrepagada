import { Component, OnInit } from '@angular/core';

import {CitaLaboratorioService} from '../citalaboratorio.service';
import {CitaLaboratorio} from '../citalaboratorio';
//import {FacturaDetail} from '../factura-detail';

@Component({
  selector: 'app-citalaboratorio-list',
  templateUrl: './citalaboratorio-list.component.html',
  styleUrls: ['./citalaboratorio-list.component.css']
})
export class CitaLaboratorioListComponent implements OnInit {

  constructor(private citaLabService: CitaLaboratorioService) { }
    
    citas: CitaLaboratorio[];
    cita_id: number;
    selectedCita : CitaLaboratorio;
    getCitasLaboratorio(): void {
        this.citaLabService.getCitasLaboratorio()
            .subscribe(citas => this.citas = citas);
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
      this.getCitasLaboratorio();
  }
}
