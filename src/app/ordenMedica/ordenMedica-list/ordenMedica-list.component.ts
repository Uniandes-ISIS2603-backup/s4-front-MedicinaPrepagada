/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component, OnInit } from '@angular/core';
import {OrdenMedicaService} from '../ordenMedica.service';
import {OrdenMedica} from '../ordenMedica';

@Component({
  selector: 'app-ordenMedica',
  templateUrl: './ordenMedica-list.component.html',
  styleUrls: ['./ordenMedica-list.component.css']
})

export class OrdenMedicaListComponent implements OnInit 
{
    /**
   * Constructor de OrdenMedicaListComponent
   */ 
    constructor(private ordenMedicaService: OrdenMedicaService) { }
    
    /**
   * Lista  de ordenes medicas
   */ 
    ordenesMedicas: OrdenMedica[];
    
    /**
   * Metodo para obtener las ordenes medicas
   */ 
    getOrdenesMedicas(): void 
    {
        this.ordenMedicaService.getOrdenesMedicas()
            .subscribe(ordenesMedicas => this.ordenesMedicas = ordenesMedicas);
    }

    /**
   * Metodo para inicializar el componenete
   */ 
  ngOnInit() 
  {
      this.getOrdenesMedicas();
  }

}


