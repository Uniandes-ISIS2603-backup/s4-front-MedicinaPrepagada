
import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FacturaService} from '../factura.service';
import {Factura} from '../factura';
@Component({
  selector: 'app-factura-create',
  templateUrl: './factura-create.component.html',
  styleUrls: ['./factura-create.component.css']
})
export class FacturaCreateComponent implements OnInit {

    constructor(private facturaService: FacturaService,
                private toastr: ToastrService
    ) { }
    
    factura: Factura;
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
    createFactura(): void{
        this.facturaService.createFactura(this.factura)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("La factura fue creada", "Creacion Factura");      
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }
    
    cancelCreation() : void{
        this.cancel.emit();
    }

  ngOnInit() {
      this.factura = new Factura();
  }

}