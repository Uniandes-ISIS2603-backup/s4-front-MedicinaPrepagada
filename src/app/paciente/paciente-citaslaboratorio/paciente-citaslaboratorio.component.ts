import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {ToastrService} from 'ngx-toastr';
import {PacienteService} from '../paciente.service';

import {CitaLaboratorio} from '../../citalaboratorio/citalaboratorio';

@Component({
  selector: 'app-paciente-citaslaboratorio',
  templateUrl: './paciente-citaslaboratorio.component.html',
  styleUrls: ['./paciente-citaslaboratorio.component.css']
})
export class PacienteCitaslaboratorioComponent implements OnInit {

  constructor(
      private pacienteService: PacienteService,
      private route: ActivatedRoute,
      private toastr: ToastrService) { }

      paciente_id: number;
      
    citasLaboratorio: CitaLaboratorio[];
    
    getCitasLaboratorioPaciente():void{
        this.pacienteService.getCitasLaboratorioPaciente(this.paciente_id)
            .subscribe(citasLaboratorio => {this.citasLaboratorio = citasLaboratorio},
            err => {this.toastr.error(err, "Error")});
    }
  ngOnInit() {
      this.paciente_id = +this.route.snapshot.paramMap.get('id');
      this.citasLaboratorio = [];
      this.getCitasLaboratorioPaciente();
  }

}
