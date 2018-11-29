
import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
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
        private route: ActivatedRoute
    ) {}

    //objeto factura
    factura: Factura;
    
    //Id factura 
    factura_id:number;
    
    @Output() cancel = new EventEmitter();
    @Output() update = new EventEmitter();
    
    /**
     * Metodo para obtener la factura
     */
    getFactura():void{
      this.facturaService.getFactura(this.factura_id)
          .subscribe(factura => {this.factura = factura;
          },
          err=>{
              this.toastrService.error(err, "Error");
          });
  }

    /**
     * Metodo para actualizar una factura
     */
    updateFactura():void{
      var factura_edit={
          idFactura: this.factura.idFactura,
          concepto: this.factura.concepto,
          date: this.factura.date,
          idCliente: this.factura.idCliente,
          pagada: this.factura.pagada,
          valor:this.factura.valor
          
      }
      console.log(factura_edit);
      this.facturaService.updateFactura(factura_edit)
          .subscribe(() => {
              this.toastrService.success("La informacion de la factura fue actualizada", "Editar Factura");
      }, err =>{
          this.toastrService.error(err, "Error");
      });
  }
    /**
     * Metodo para cancelar la edicion
     */
    cancelEdition(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.factura_id = +this.route.snapshot.paramMap.get('idFactura'); 
        this.factura = new Factura();
        this.getFactura();  
    }

    ngOnChanges() {
        this.ngOnInit();
    }
}