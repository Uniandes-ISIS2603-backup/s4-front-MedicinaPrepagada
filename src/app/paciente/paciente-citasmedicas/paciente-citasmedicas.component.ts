import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {ToastrService} from 'ngx-toastr';
import {PacienteService} from '../paciente.service';

import {CitaMedica} from '../../cita-medica/cita-medica';
@Component({
  selector: 'app-paciente-citasmedicas',
  templateUrl: './paciente-citasmedicas.component.html',
  styleUrls: ['./paciente-citasmedicas.component.css']
})
export class PacienteCitasmedicasComponent implements OnInit {

  constructor(
      private pacienteservice: PacienteService,
      private route: ActivatedRoute,
      private toastr: ToastrService) { }

    id_paciente: number;
      
    citasMedicas: CitaMedica[];
    
    getCitasMedicasPaciente(): void{
        this.pacienteservice.getCitasMedicasPaciente(this.id_paciente)
            .subscribe(citasMedicas => {this.citasMedicas = citasMedicas},
            err => {this.toastr.error(err, "Error")});
    }
    
    
  ngOnInit() {
      this.id_paciente = +this.route.snapshot.paramMap.get('id');
      this.citasMedicas = [];
      this.getCitasMedicasPaciente();
  }

}
