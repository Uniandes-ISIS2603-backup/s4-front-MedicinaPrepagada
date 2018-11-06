import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {Factura} from '../factura';
import {ToastrService} from 'ngx-toastr';
import {FacturaService} from '../factura.service';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {

    constructor(
        private facturaService: FacturaService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService
        ) {}
        
    factura: Factura;
    
    factura_id: number;
    
    getFactura(): void 
        {
        this.facturaService.getFactura(this.factura_id)
            .subscribe(factura => {
            this.factura = factura}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }

  ngOnInit() {
      this.factura_id = +this.route.snapshot.paramMap.get('id');
      this.factura = new Factura;
      this.getFactura();
  }

}
