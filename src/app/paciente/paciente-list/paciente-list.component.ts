import { Component, OnInit } from '@angular/core';
import {PacienteService} from '../paciente.service';
import {Paciente} from '../paciente';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

    constructor(private pacienteService: PacienteService) { }
    
    pacientes: Paciente[];
    
    getPacientes(): void {
        this.pacienteService.getPacientes()
            .subscribe(pacientes => this.pacientes = pacientes);
    }

  ngOnInit() {
      this.getPacientes();
  }

}
