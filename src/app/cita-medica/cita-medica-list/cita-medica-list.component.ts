import { Component, OnInit } from '@angular/core';

import {CitaMedica} from '../cita-medica';
import {CitaMedicaService} from '../cita-medica.service';

@Component({
  selector: 'app-cita-medica-list',
  templateUrl: './cita-medica-list.component.html',
  styleUrls: ['./cita-medica-list.component.css']
})

/**
* The component for the list of citas medicas in Medisistemas
*/
export class CitaMedicaListComponent implements OnInit {

/**
    * Constructor for the component
    * @param CitaMedicaService The services provider
    */
  constructor(private citaMedicaService: CitaMedicaService) { }
    
  /**
   * Lista de citas medicas
   */
    citasMedicas: CitaMedica[];
    
    
    /**
     * Pide el servicio de recuperar todas las citas medicas
     */
    getCitasMedicas(): void {
        this.citaMedicaService.getCitasMedicas()
            .subscribe(citasMedicas => this.citasMedicas = citasMedicas);
    }
    
    /**
     * Este método será llamado a penas el componente sea creado
     */
  ngOnInit() {
      this.getCitasMedicas();
  }
  

}
