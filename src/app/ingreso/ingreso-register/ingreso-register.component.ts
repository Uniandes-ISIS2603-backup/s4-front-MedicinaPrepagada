/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component } from '@angular/core';
import { IngresoService } from '../ingreso.service';
import {Usuario} from '../usuario';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
    selector: 'app-ingreso-register',
    templateUrl: 'ingreso-register.component.html',
    styleUrls: ['./ingreso-register.component.css']
})

export class RegisterComponent {

   /**
   * Constructor de RegisterComponent
   */ 
    constructor(
        private router: Router,
        private userService: IngresoService,
        private toastrService: ToastrService) { }

   /**
   * Atributo que modela un usuario
   */ 
    user: Usuario;

   /**
   * Lista de roles
   */ 
    roles: String[];
    
    /**
   * Metodo para registrarse en el sistema
   */ 
    register() : void 
    {
        this.userService.login(this.user.tipoUsuario);
        this.toastrService.success('Se ha registrado exitosamente')
    }
    
    /**
   * Metodo para inicializar el componente
   */ 
    ngOnInit() 
    {
        this.user = new Usuario();
        this.roles = [ 'Paciente'];
    }
}
