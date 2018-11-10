import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {ToastrService} from 'ngx-toastr';
import {PacienteService} from '../paciente.service';

import {HistoriaClinica} from '../../historiaClinica/historiaClinica';
@Component({
  selector: 'app-paciente-historiasclinicas',
  templateUrl: './paciente-historiasclinicas.component.html',
  styleUrls: ['./paciente-historiasclinicas.component.css']
})
export class PacienteHistoriasclinicasComponent implements OnInit {

  /**
   * constructor del componnete
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
     * todas las historias clinicas del paciente
     */
    historiasClinicas: HistoriaClinica[];
    
    /**
     * metodo para obtener todas las historias clinicas de un paciente
     */
    getHistoriasClinicasPaciente(): void{
        this.pacienteService.getHistoriasClinicasPaciente(this.paciente_id)
            .subscribe(historiasClinicas => {this.historiasClinicas = historiasClinicas},
            err => {this.toastr.error(err, "Error")});
    }

    
    
  /**
   * metodo para inicializar el componente
   */
  ngOnInit() {
      this.paciente_id = +this.route.snapshot.paramMap.get('id');
      this.historiasClinicas = [];
      this.getHistoriasClinicasPaciente();
  }

}
