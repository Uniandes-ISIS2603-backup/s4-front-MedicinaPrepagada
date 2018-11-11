import { Component, OnInit } from '@angular/core';

import {Medico} from '../medico';
import {MedicoService} from '../medico.service';


@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styleUrls: ['./medico-list.component.css']
})

/**
* The component for the list of medicos in Medisistemas
*/
export class MedicoListComponent implements OnInit {
    /**
    * Constructor for the component
    * @param MedicoService The services provider
    */
  constructor(private medicoService: MedicoService) { }
    
    /**
   * Lista de medicos
   */
    medicos: Medico[];
    
    /**
     * Pide el servicio de recuperar todas los medicos
     */
    getMedicos(): void {
        this.medicoService.getMedicos()
            .subscribe(medicos => this.medicos = medicos);
    }

/**
     * Este método será llamado a penas el componente sea creado
     */
  ngOnInit() {
      this.getMedicos();
  }
  
    
}
