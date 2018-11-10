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

  /**
   * constructor del componente
   */
  constructor(
      private pacienteService: PacienteService,
      private route: ActivatedRoute,
      private toastr: ToastrService) { }

    /**
     * id del paciente
     */
     paciente_id: number;
     
    /**
     * todas las citas de laboratorio del paciente
     */ 
    citasLaboratorio: CitaLaboratorio[];
    
    /**
     * obtiene todas las citas de laboratorio del paciente
     */
    getCitasLaboratorioPaciente():void{
        this.pacienteService.getCitasLaboratorioPaciente(this.paciente_id)
            .subscribe(citasLaboratorio => {this.citasLaboratorio = citasLaboratorio},
            err => {this.toastr.error(err, "Error")});
    }
  
  /**
   * metodo para inicializar el componente
   */
  ngOnInit() {
      this.paciente_id = +this.route.snapshot.paramMap.get('id');
      this.citasLaboratorio = [];
      this.getCitasLaboratorioPaciente();
  }

}
