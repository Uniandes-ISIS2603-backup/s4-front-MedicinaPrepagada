import { Component, OnInit } from '@angular/core';
import {PacienteService} from '../paciente.service';
import {ActivatedRoute} from '@angular/router/';
import {ToastrService} from 'ngx-toastr';
import {TarjetaCredito} from '../../tarjeta-credito/tarjeta-credito';

@Component({
  selector: 'app-paciente-tarjetascredito',
  templateUrl: './paciente-tarjetascredito.component.html',
  styleUrls: ['./paciente-tarjetascredito.component.css']
})
export class PacienteTarjetascreditoComponent implements OnInit {

    constructor(private pacienteService: PacienteService,
        private route: ActivatedRoute,
        private toastr: ToastrService) { }

    paciente_id:number;
    
    tarjetasCredito: TarjetaCredito[];
    
    getTarjetasCredito(): void{
        this.pacienteService.getTarjetasCreditoPaciente(this.paciente_id).
            subscribe(tarjetasCredito => {this.tarjetasCredito = tarjetasCredito},
            err => this.toastr.error(err, "Error"));
    }
  ngOnInit() {
      this.paciente_id = +this.route.snapshot.paramMap.get('id');
      this.tarjetasCredito = [];
      this.getTarjetasCredito();
  }

}
