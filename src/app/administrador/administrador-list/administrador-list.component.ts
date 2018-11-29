/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
import { Component, OnInit } from '@angular/core';
import {AdministradorService} from '../administrador.service';
import {Administrador} from '../administrador';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})

export class AdministradorListComponent implements OnInit 
{
    /**
     * Constructor de AdministradorListComponent
    */ 
    constructor(
    private administradorService: AdministradorService) {}
    
    /**
     * Lista de administradores
    */ 
    administradores: Administrador[];
    
    /**
     * Atributo del identificador del adminsitrador
    */ 
    admi_id: number;
    
     /**
     * Metodo para obenter los administradores
    */ 
    getAdministradores(): void 
    {
        this.administradorService.getAdministradores()
            .subscribe(administradores => this.administradores = administradores);
    }
    
     /**
     * Metodo para inicializar el componente
    */ 
    ngOnInit() 
    {
        this.getAdministradores();
    }
}

