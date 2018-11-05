import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {Paciente} from '../paciente';
import {ToastrService} from 'ngx-toastr';
import {TarjetaCredito} from '../../tarjeta-credito/tarjeta-credito';

import {PacienteService} from '../paciente.service';

@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: ['./paciente-detail.component.css']
})
export class PacienteDetailComponent implements OnInit {

    constructor(
        private pacienteService: PacienteService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService
        ) {}
        
    paciente: Paciente;
    
    paciente_id: number;
    
    tarjetasCredito: TarjetaCredito[];
    
    getPaciente(): void {
        this.pacienteService.getPaciente(this.paciente_id)
            .subscribe(paciente => {
            this.paciente = paciente}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }
    
    gettarjetasCreditoPaciente():void{
        this.pacienteService.getTarjetasCreditoPaciente(this.paciente_id)
            .subscribe(tarjetasCredito => {this.tarjetasCredito = tarjetasCredito},
            err => {this.toastrservice.error(err,"Error")});
            
    }

  ngOnInit() {
      this.paciente_id = +this.route.snapshot.paramMap.get('id');
      this.paciente = new Paciente;
      this.tarjetasCredito = [];
      this.getPaciente();
      this.gettarjetasCreditoPaciente();
      
  }

}
