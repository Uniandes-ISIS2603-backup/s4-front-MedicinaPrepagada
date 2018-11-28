/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component } from '@angular/core';
import { IngresoService } from '../ingreso.service';
import {Usuario} from '../usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-ingreso-register',
    templateUrl: 'ingreso-register.component.html',
    styleUrls: ['./ingreso-register.component.css']
})

export class RegisterComponent {

    constructor(
        private userService: IngresoService,
        private toastrService: ToastrService) { }

    user: Usuario;

    roles: String[];
    
    register() : void 
    {
        this.userService.login(this.user.tipoUsuario);
        this.toastrService.success('Se ha registrado exitosamente')
    }
    
    ngOnInit() 
    {
        this.user = new Usuario();
        this.roles = ['Administrador', 'Paciente', 'Medico'];
    }
}
