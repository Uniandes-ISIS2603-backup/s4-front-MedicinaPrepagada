/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdministradorService } from '../administrador.service';
import { Administrador } from '../administrador';

@Component({
    selector: 'app-administrador-create',
    templateUrl: './administrador-create.component.html',
    styleUrls: ['./administrador-create.component.css']
})
export class AdministradorCreateComponent implements OnInit {

    constructor(
        private administradorService: AdministradorService,
        private toastrService: ToastrService
    ) { }

    administrador: Administrador;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

     createAdministrador(): Administrador {
       
        this.administradorService.createAdministrador(this.administrador)
            .subscribe((administrador) => {
                this.administrador = administrador;
                this.create.emit();
                this.toastrService.success("El administrador fue creado", "Creacion de administrador");                
            });
            return this.administrador;
    }

    cancelCreation(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.administrador = new Administrador();
    }
}

