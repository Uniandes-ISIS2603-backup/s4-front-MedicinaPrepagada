/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment'; 
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions'
import 'rxjs/add/operator/catch';
import { ToastrService } from 'ngx-toastr';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import {Usuario} from './usuario';

const API_URL = environment.apirURL;

@Injectable()
export class IngresoService {

    constructor (private router: Router,
                 private roleService: NgxRolesService,
                 private permissionsService: NgxPermissionsService,
                 private toastrService: ToastrService,
                 private http: HttpClient) { }

    start (): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['edit_author_permission', 'delete_author_permission', 'leave_review']);
        const role = localStorage.getItem('role');
        if (!role) {
            this.setVisitanteRol();
        } else if (role === 'ADMIN') {
            this.setAdministradorRol();
        } else if (role === 'PACIENTE') {
            this.setPacienteRol();
        } else {
            this.setMedicoRol();
        }
    }

    setVisitanteRol (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('VISITANTE', ['']);
    }

    setPacienteRol (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('PACIENTE', ['leave_review']);
        localStorage.setItem('role', 'PACIENTE');
    }
    
     setMedicoRol (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('MEDICO', ['leave_review']);
        localStorage.setItem('role', 'MEDICO');
    }

    setAdministradorRol (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['edit_author_permission', 'delete_author_permission']);
        localStorage.setItem('role', 'ADMIN');
    }

    printRole (): void {
        console.log(this.roleService.getRoles());
    }
    
    getCredencialesUsuario(login){
        return this.http.get<Usuario>(API_URL + '/usuarios/' + login).catch(err => this.handleError(err));
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login (rol): void 
    {
        if (rol === 'Administrador') 
        {
            this.setAdministradorRol();
        } 
        else if( rol === 'Paciente' ) 
        {
            this.setPacienteRol(); 
        } 
        else
        {
            this.setMedicoRol(); 
        }
        this.router.navigateByUrl('/citasMedicas/list');
    }

    /**
     * Logs the user out
     */
     
    logout (): void {
        this.roleService.flushRoles();
        this.setVisitanteRol();
        localStorage.removeItem('role');
        this.router.navigateByUrl('/');
        this.toastrService.success('Ha salido de su cuenta exitosamente')
    }
    
    /**
     * metodo para manejar las exceptions
     */
    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}
