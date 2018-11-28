/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import { Component, OnInit } from '@angular/core';
import {HistoriaClinicaService} from '../historiaClinica.service';
import {HistoriaClinica} from '../historiaClinica';

@Component({
  selector: 'app-historiaClinica',
  templateUrl: './historiaClinica-list.component.html',
  styleUrls: ['./historiaClinica-list.component.css']
})

export class HistoriaClinicaListComponent implements OnInit 
{
    /**
     * Constructor de HistoriaClinicaListComponent
     */
    constructor(private historiaClinicaService: HistoriaClinicaService) { }
    
    /**
     * Lista de historias clinicas
     */
    historiasClinicas: HistoriaClinica[];
    
    /**
     * Metodo para obtener todas las historias clincias
     */
    getHistoriasClinicas(): void 
    {
        this.historiaClinicaService.getHistoriasClinicas()
            .subscribe(historiasClinicas => this.historiasClinicas = historiasClinicas);
    }

    /**
     * Metodo para inicialziar la componente
     */
    ngOnInit() 
    {
        this.getHistoriasClinicas();
    }

}