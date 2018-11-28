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
import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {Usuario} from './usuario';

const API_URL = environment.apirURL;

@Injectable()
export class IngresoService {

    /**
   * Constructor de IngresoService
   */ 
    constructor (private router: Router,
                 private roleService: NgxRolesService,
                 private permissionsService: NgxPermissionsService,
                 private toastrService: ToastrService,
                 private http: HttpClient) { }

     /**
   * Metodo para iniciar el ingreso y asignar rol al usuario
   */            
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

    /**
   * Metodo para asignar el rol de visitante
   */
    setVisitanteRol (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('VISITANTE', ['']);
    }

   /**
   * Metodo para asignar el rol de paciente
   */
    setPacienteRol (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('PACIENTE', ['leave_review']);
        localStorage.setItem('role', 'PACIENTE');
    }
    
   /**
   * Metodo para asignar el rol de medico
   */
     setMedicoRol (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('MEDICO', ['leave_review']);
        localStorage.setItem('role', 'MEDICO');
    }

  /**
   * Metodo para asignar el rol de administrador
   */
    setAdministradorRol (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['edit_author_permission', 'delete_author_permission']);
        localStorage.setItem('role', 'ADMIN');
    }

  /**
   * Metodo para imprimir el rol en consola
   */
    printRole (): void {
        console.log(this.roleService.getRoles());
    }
    
   /**
   * Metodo para obtener las credenciales del usuario
   */
    getCredencialesUsuario(login){
        return this.http.get<Usuario>(API_URL + '/usuarios/' + login).catch(err => this.handleError(err));
    }

    /**
     * Metodo para asignar rol dependiendo del tipo de usuario seleccionado
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
     * Metodo para salir de la cuenta o hacer Logout
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
