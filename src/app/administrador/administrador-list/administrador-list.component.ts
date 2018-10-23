/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
import { Component, OnInit } from '@angular/core';
import {AdministradorService} from '../administrador.service';
import {Administrador} from '../administrador';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})


export class AdministradorListComponent implements OnInit 
{
    constructor(private administradorService: AdministradorService) { }
    
    administradores: Administrador[];
    
    getAdministradores(): void 
    {
        this.administradorService.getAdministradores()
            .subscribe(administradores => this.administradores = administradores);
    }

  ngOnInit() 
  {
      this.getAdministradores();
  }

}

