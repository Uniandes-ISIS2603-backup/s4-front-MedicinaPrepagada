/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdministradorService } from '../administrador.service';
import { Administrador } from '../administrador';
import {Router} from '@angular/router';

@Component({
    selector: 'app-administrador-create',
    templateUrl: './administrador-create.component.html',
    styleUrls: ['./administrador-create.component.css']
})
export class AdministradorCreateComponent implements OnInit {

    constructor(
        private administradorService: AdministradorService,
        private toastr: ToastrService, 
        private router: Router
    ) { }

    administrador: Administrador;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

     createAdministrador(): void {
       
        this.administradorService.createAdministrador(this.administrador)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("El administrador fue creado", "Creacion de administrador"); 
                this.router.navigateByUrl('/administradores/list');               
           }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }

    cancelCreation(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.administrador = new Administrador();
    }
}

