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
    constructor(private ordenMedicaService: OrdenMedicaService) { }
    
    ordenesMedicas: OrdenMedica[];
    
    getOrdenesMedicas(): void 
    {
        this.ordenMedicaService.getOrdenesMedicas()
            .subscribe(ordenesMedicas => this.ordenesMedicas = ordenesMedicas);
    }

  ngOnInit() 
  {
      this.getOrdenesMedicas();
  }

}


