/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {ToastrService} from 'ngx-toastr';
import {HistoriaClinicaService} from '../historiaClinica.service';

import {OrdenMedica} from '../../ordenMedica/ordenMedica';

@Component({
  selector: 'app-historiaClinica-ordenesmedicas',
  templateUrl: './historiaClinica-ordenesmedicas.component.html',
  styleUrls: ['./historiaClinica-ordenesmedicas.component.css']
})

export class HistoriasOrdenMedicaComponent implements OnInit {

  /**
   * constructor del HistoriasOrdenMedicaComponent
   */
  constructor(
      private histService: HistoriaClinicaService,
      private route: ActivatedRoute,
      private toastr: ToastrService) { }
      
   /**
   * Atributo para modelar el identificador de una historia clinica
   */  
    historia_id: number;
    
    /**
   * Lista de ordnenes medicas
   */  
    ordenesmedicas: OrdenMedica[];
    
    /**
   * Metodo para obetenr las ordenes medicas de una historia clinica
   */  
    getOrdenesMedicasHistoriaClinica(): void
    {
        this.histService.getOrdenesHistoriaClinica(this.historia_id)
            .subscribe(ordenesmedicas => {this.ordenesmedicas = ordenesmedicas},
            err => {this.toastr.error(err, "Error")});
    }
   

    /**
   * Metodo para inicializar el componente
   */  
  ngOnInit() {
      this.historia_id = +this.route.snapshot.paramMap.get('id');
      this.ordenesmedicas = [];
      this.getOrdenesMedicasHistoriaClinica();
  }

}

