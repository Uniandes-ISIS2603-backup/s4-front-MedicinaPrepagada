/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions'
import 'rxjs/add/operator/catch';

@Injectable()
export class IngresoService {

    constructor (private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

    start (): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['edit_author_permission', 'delete_author_permission', 'leave_review']);
        const role = localStorage.getItem('role');
        if (!role) {
            this.setVisitanteRole();
        } else if (role === 'ADMIN') {
            this.setAdministratorRole();
        } else if (role === 'PACIENTE') {
            this.setPacienteRole();
        } else {
            this.setMedicoRole();
        }
    }

    setVisitanteRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('VISITANTE', ['']);
    }

    setPacienteRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('PACIENTE', ['leave_review']);
        localStorage.setItem('role', 'PACIENTE');
    }
    
     setMedicoRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('MEDICO', ['leave_review']);
        localStorage.setItem('role', 'MEDICO');
    }

    setAdministratorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['edit_author_permission', 'delete_author_permission']);
        localStorage.setItem('role', 'ADMIN');
    }

    printRole (): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login (role): void {
        if (role === 'Administrator') {
            this.setAdministratorRole();
        } else {
            this.setPacienteRole()
        }
        this.router.navigateByUrl('/books/list');
    }

    /**
     * Logs the user out
     */
    logout (): void {
        this.roleService.flushRoles();
        this.setVisitanteRole();
        localStorage.removeItem('role');
        this.router.navigateByUrl('/');
    }
}
