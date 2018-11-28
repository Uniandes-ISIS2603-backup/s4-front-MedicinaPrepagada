/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso.service';
import {Usuario} from '../usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-ingreso-login',
    templateUrl: 'ingreso-login.component.html',
    styleUrls: ['./ingreso-login.component.css']
})

export class LoginComponent implements OnInit 
    {

    constructor(
        private toasteservice: ToastrService,
        private ingresoService: IngresoService) { }
        
    user: Usuario;
    
    usuario: Usuario;

    roles: String[];

    login(): void {
        console.log(this.user.login);
        console.log(this.user.contrasena);
        this.getCredenciales();        
    }
    
    getCredenciales():void{
        this.ingresoService.getCredencialesUsuario(this.user.login).toPromise().then(usuario => {this.usuario = usuario;
            this.performLogin();});
    }
    
    performLogin():void{
                if(this.user.contrasena != this.usuario.contrasena){
            this.toasteservice.error("La contraseña es incorrecta");
            console.log('mala contrasena')
        }else{
            this.ingresoService.login(this.usuario.tipoUsuario);
            this.toasteservice.success('Ha ingresado a su cuenta')    
        }
    }
    
    
        ngOnInit() {
            this.user = new Usuario();
            this.roles = ['Administrador', 'Paciente', 'Medico'];
            this.usuario = new Usuario();
            
    }
}
