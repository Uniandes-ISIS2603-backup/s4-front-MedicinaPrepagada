/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {OrdenMedicaService} from '../ordenMedica.service';
import {ToastrService} from 'ngx-toastr';
import { OrdenMedica } from '../ordenMedica';

@Component({
    selector: 'app-ordenMedica-edit',
    templateUrl: './ordenMedica-edit.component.html',
    styleUrls: ['./ordenMedica-edit.component.css']
})

export class OrdenMedicaEditComponent implements OnInit, OnChanges 
{

    constructor(
       
        private ordenService: OrdenMedicaService,
        private toastrService: ToastrService,
    ) {}

    orden: OrdenMedica; 
    
    @Output() cancel = new EventEmitter();
    @Output() update = new EventEmitter();
    
    getOrdenMedica(): void {
        this.ordenService.getOrdenMedica(this.orden)
            .subscribe(orden => {
                this.orden = orden;
            });
    }

    updateOrdenMedica(): void {
        this.ordenService.updateOrdenMedica(this.orden)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("Se ha modificado exitosamente", "Orden Medica modificada");
            });
        this.update.emit();
    }

    cancelEdition(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.orden = new OrdenMedica( ); 
        this.getOrdenMedica();  
    }

    ngOnChanges() {
        this.ngOnInit();
    }

}
