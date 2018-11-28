/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {OrdenMedicaService} from '../ordenMedica.service';
import {ToastrService} from 'ngx-toastr';
import { OrdenMedica } from '../ordenMedica';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-ordenMedica-edit',
    templateUrl: './ordenMedica-edit.component.html',
    styleUrls: ['./ordenMedica-edit.component.css']
})

export class OrdenMedicaEditComponent implements OnInit, OnChanges 
{
   /**
   * Constructor de OrdenMedicaEditComponent
   */  
    constructor(
       
        private ordenService: OrdenMedicaService,
        private toastrService: ToastrService,
        private route: ActivatedRoute,
        private router: Router 
    ) {}

    /**
   * Input para declarar el identificador de la orden medica
   */ 
    @Input() orden_id;
    
    /**
   * Atributo de tipo orden medica
   */ 
    ordenMedica: OrdenMedica; 
    
    /**
   * Output para cancelar la edicion de la orden medica
   */ 
    @Output() cancel = new EventEmitter();
    
    /**
   * Output para editar la orden medica
   */ 
    @Output() update = new EventEmitter();
    
    /**
   * metodo para obneter una orden medica segun el identificador dado
   */ 
    getOrdenMedica(): void {
        this.ordenService.getOrdenMedica(this.orden_id)
            .subscribe(orden => {
                this.ordenMedica = orden;
           }, err =>  {this.toastrService.error(err, "Error"); })
    }

   /**
   * Metodo para editar la orden medica
   */ 
    updateOrdenMedica(): void 
    {
        var orden_edit =
        {
          id: this.ordenMedica.id,
          fechaExpedicion: this.ordenMedica.fechaExpedicion,
          comentarios: this.ordenMedica.comentarios,
          validaHasta: this.ordenMedica.validaHasta,
          firmaMedico: this.ordenMedica.firmaMedico
        }
        this.ordenService.updateOrdenMedica(orden_edit, this.orden_id)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("Se ha modificado exitosamente", "Orden Medica modificada");
                this.router.navigate(['/ordenesMedicas/' + this.orden_id]);
       }, err =>{
          this.toastrService.error(err, "Error");
      });
  }

   /**
   * Metodo para cancelar la edicion de una orden medica
   */ 
    cancelEdition(): void {
        this.toastrService.warning('La orden medica no fue editada', 'Editar Orden Medica');
        this.router.navigate(['/ordenesMedicas/' + this.orden_id]);
        this.cancel.emit();
    }

   /**
   * Metodo para inicializar el componenete
   */ 
    ngOnInit() {
        this.orden_id = + this.route.snapshot.paramMap.get('id');
        console.log(this.orden_id);
        this.ordenMedica = new OrdenMedica( ); 
        this.getOrdenMedica();  
    }

   /**
   * Metodo para editar otras ordenes medicas
   */ 
    ngOnChanges() {
        this.ngOnInit();
    }

}
