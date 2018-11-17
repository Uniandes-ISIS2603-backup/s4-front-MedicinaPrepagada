import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {FacturaService} from '../factura.service';
import {ToastrService} from 'ngx-toastr';
import { Factura } from '../factura';
@Component({
  selector: 'app-factura-edit',
  templateUrl: './factura-edit.component.html',
  styleUrls: ['./factura-edit.component.css']
})
export class FacturaEditComponent implements OnInit, OnChanges{
 
 constructor(
       
        private facturaService: FacturaService,
        private toastrService: ToastrService,
    ) {}

    factura: Factura; 
    
    @Output() cancel = new EventEmitter();
    @Output() update = new EventEmitter();
    
    getFactura(): void {
        this.facturaService.getFactura(this.factura)
            .subscribe(factura => {
                this.factura = factura;
            });
    }

    updateFactura(): void {
        this.facturaService.updateFactura(this.factura)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("Se ha modificado exitosamente", "Factura modificada");
            });
        this.update.emit();
    }

    cancelEdition(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.factura = new Factura( ); 
        this.getFactura();  
    }

    ngOnChanges() {
        this.ngOnInit();
    }
}
