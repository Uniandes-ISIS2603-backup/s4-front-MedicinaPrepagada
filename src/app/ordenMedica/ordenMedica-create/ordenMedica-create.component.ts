/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {OrdenMedicaService} from '../ordenMedica.service';
import {OrdenMedica} from '../ordenMedica';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ordenMedica-create',
  templateUrl: './ordenMedica-create.component.html',
  styleUrls: ['./ordenMedica-create.component.css']
})
export class OrdenMedicaCreateComponent implements OnInit {

   /**
   * Constructor de OrdenMedicaCreateComponent
   */  
    constructor(private ordenMedicaService: OrdenMedicaService,
                private toastr: ToastrService, 
                private router: Router
    ) { }
    
    /**
   * Atributo de tipo Orden Medica
   */  
    ordenMedica: OrdenMedica;
    
    /**
   * Output para cancelar la creacion de una orden medica
   */  
    @Output() cancel = new EventEmitter();
    
    /**
   * Output para crear una orden medica
   */  
    @Output() create = new EventEmitter();
    
    /**
   * Metodo para crear una orden medica
   */  
    createOrdenMedica(): void
        {
        this.ordenMedicaService.createOrdenMedica(this.ordenMedica)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("La orden medica fue creada", "Creacion Orden Medica ");  
                this.router.navigate(['ordenesMedicas/list']);    
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }
    
    /**
   * Metodo para cancelar la creacion de una ordne medica
   */  
    cancelCreation() : void{
        this.cancel.emit();
    }

   /**
   * Metodo para inicializar el componente
   */  
  ngOnInit() {
      this.ordenMedica = new OrdenMedica();
  }

}
