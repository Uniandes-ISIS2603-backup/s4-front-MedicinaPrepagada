/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {AdministradorService} from '../administrador.service';
import {ToastrService} from 'ngx-toastr';
import { Administrador } from '../administrador';

@Component({
    selector: 'app-administrador-edit',
    templateUrl: './administrador-edit.component.html',
    styleUrls: ['./administrador-edit.component.css']
})

export class AdministradorEditComponent implements OnInit, OnChanges 
{

    constructor(
       
        private admiService: AdministradorService,
        private toastrService: ToastrService,
    ) {}

    admi: Administrador; 
    @Output() cancel = new EventEmitter();
    @Output() update = new EventEmitter();
    
    getAdministrador(): void {
        this.admiService.getAdministrador(this.admi)
            .subscribe(admi => {
                this.admi = admi;
            });
    }

    updateAdministrador(): void {
        this.admiService.updateAdministrador(this.admi)
            .subscribe(() => {
                this.toastrService.success("Se ha modificado exitosamente", "Administrador modificado");
            });
        this.update.emit();
    }

    cancelEdition(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.admi = new Administrador( ); 
        this.getAdministrador(); 
    }

    ngOnChanges() {
        this.ngOnInit();
    }

}
