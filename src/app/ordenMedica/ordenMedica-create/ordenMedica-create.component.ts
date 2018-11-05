/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {OrdenMedicaService} from '../ordenMedica.service';
import {OrdenMedica} from '../ordenMedica';

@Component({
  selector: 'app-ordenMedica-create',
  templateUrl: './ordenMedica-create.component.html',
  styleUrls: ['./ordenMedica-create.component.css']
})
export class OrdenMedicaCreateComponent implements OnInit {

    constructor(private ordenMedicaService: OrdenMedicaService,
                private toastr: ToastrService
    ) { }
    
    ordenMedica: OrdenMedica;
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
    createOrdenMedica(): void
        {
        this.ordenMedicaService.createOrdenMedica(this.ordenMedica)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("La orden medica fue creada", "Creacion Orden Medica ");      
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }
    
    cancelCreation() : void{
        this.cancel.emit();
    }

  ngOnInit() {
      this.ordenMedica = new OrdenMedica();
  }

}
