/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso.service';
import { User } from '../ingreso';
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
        
    user: User;

    roles: String[];

    login(): void {
        this.ingresoService.login(this.user.role);
        this.toasteservice.success('Logged in')
    }
    
        ngOnInit() {
        this.user = new User();
        this.roles = ['Administrator', 'Client'];
    }
}
