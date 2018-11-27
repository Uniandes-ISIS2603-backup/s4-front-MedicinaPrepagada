/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso.service';
import { User } from '../ingreso';
import { ToastrService } from 'ngx-toastr';
import { AdministradorService } from '../../administrador/administrador.service';
import { Administrador } from '../../administrador/administrador';

@Component({
    selector: 'app-ingreso-login',
    templateUrl: 'ingreso-login.component.html',
    styleUrls: ['./ingreso-login.component.css']
})

export class LoginComponent implements OnInit 
    {

    constructor(
        private toasteservice: ToastrService,
        private ingresoService: IngresoService,
        private administradorService: AdministradorService) { }
        
    user: User;

    roles: String[];
    
    administradores: Administrador[];
    
    getAdministradores(): void 
    {
        this.administradorService.getAdministradores()
            .subscribe(administradores => this.administradores = administradores);
    }

    login(): void {
        this.ingresoService.login(this.user.role);
        this.toasteservice.success('Ha ingresado a su cuenta');
    }
    
        ngOnInit() {
            this.getAdministradores();
            console.log(this.administradores[0].login);
        this.user = new User();
        this.roles = ['Administrador', 'Paciente', 'Medico'];
    }
}
