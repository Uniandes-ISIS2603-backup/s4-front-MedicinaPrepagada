import { Component, OnInit } from '@angular/core';

import {Especialidad} from '../especialidad';
import {EspecialidadService} from '../especialidad.service';

@Component({
  selector: 'app-especialidad-list',
  templateUrl: './especialidad-list.component.html',
  styleUrls: ['./especialidad-list.component.css']
})

/**
* The component for the list of especialidades in Medisistemas
*/
export class EspecialidadListComponent implements OnInit {


/**
    * Constructor for the component
    * @param EspecialidadService The services provider
    */
  constructor(private especialidadService: EspecialidadService) { }
    
  /**
   * Lista de citas especialidades
   */
    especialidades: Especialidad[];
    
    /**
     * Pide el servicio de recuperar todas las especialidades
     */
    getEspecialidades(): void {
        this.especialidadService.getEspecialidades()
            .subscribe(especialidades => this.especialidades = especialidades);
    }

/**
     * Este método será llamado a penas el componente sea creado
     */
  ngOnInit() {
      this.getEspecialidades();
  }

}
