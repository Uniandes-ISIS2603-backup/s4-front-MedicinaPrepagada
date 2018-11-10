import { Component, OnInit } from '@angular/core';
import {PacienteService} from '../paciente.service';
import {Paciente} from '../paciente';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

    /**
     * constructor del componente
     */
    constructor(private pacienteService: PacienteService) { }
    
    /**
     * lista de todos los pacientes
     */
    pacientes: Paciente[];
    
    /**
     * obtiene todos los pacientes
     */
    getPacientes(): void {
        this.pacienteService.getPacientes()
            .subscribe(pacientes => this.pacientes = pacientes);
    }

  /**
   * metodo para inicializar el componente
   */
  ngOnInit() {
      this.getPacientes();
  }

}
