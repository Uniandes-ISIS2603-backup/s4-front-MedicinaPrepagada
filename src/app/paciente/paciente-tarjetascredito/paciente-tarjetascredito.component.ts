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
    /**
     * construcotr del componente
     */
    constructor(private pacienteService: PacienteService,
        private route: ActivatedRoute,
        private toastr: ToastrService) { }
    
    /**
     * id del paciente dueño de las tarjetas de credito
     */
    paciente_id:number;
    
    /**
     * lista de las tarjetas de credito
     */
    tarjetasCredito: TarjetaCredito[];
    
    /**
     * obtiene las tarjetas de credito de un paciente
     */
    getTarjetasCredito(): void{
        this.pacienteService.getTarjetasCreditoPaciente(this.paciente_id).
            subscribe(tarjetasCredito => {this.tarjetasCredito = tarjetasCredito},
            err => this.toastr.error(err, "Error"));
    }
    
  /**
   * funcion para inicializar el componente
   */
  ngOnInit() {
      this.paciente_id = +this.route.snapshot.paramMap.get('id');
      this.tarjetasCredito = [];
      this.getTarjetasCredito();
  }

}
