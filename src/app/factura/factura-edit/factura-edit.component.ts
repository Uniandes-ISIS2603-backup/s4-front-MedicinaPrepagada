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

    factura: Factura; 
    @Input() factura_id:number;
    
    @Output() cancel = new EventEmitter();
    @Output() update = new EventEmitter();
    
    getFactura():void{
      this.facturaService.getFactura(this.factura_id)
          .subscribe(factura => {this.factura = factura;
          },
          err=>{
              this.toastrService.error(err, "Error");
          });
  }

    updateFactura():void{
      var factura_edit={
          pagada: this.factura.pagada
          
      }
      console.log(factura_edit);
      this.facturaService.updateFactura(factura_edit)
          .subscribe(() => {
              this.toastrService.success("La informacion de la factura fue actualizada", "Editar Factura");
      }, err =>{
          this.toastrService.error(err, "Error");
      });
  }

    cancelEdition(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.factura_id = +this.route.snapshot.paramMap.get('id'); 
        this.getFactura();  
    }

    ngOnChanges() {
        this.ngOnInit();
    }
}
