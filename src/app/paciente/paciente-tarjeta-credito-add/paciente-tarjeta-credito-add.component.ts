import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {PacienteService} from '../paciente.service';
import {ActivatedRoute} from '@angular/router/';
import {ToastrService} from 'ngx-toastr';
import {TarjetaCredito} from '../../tarjeta-credito/tarjeta-credito';
import {Paciente} from '../paciente';

@Component({
  selector: 'app-paciente-tarjeta-credito-add',
  templateUrl: './paciente-tarjeta-credito-add.component.html',
  styleUrls: ['./paciente-tarjeta-credito-add.component.css']
})
export class PacienteTarjetaCreditoAddComponent implements OnInit {

    constructor(private pacienteService: PacienteService,
        private toastr: ToastrService,
        private route: ActivatedRoute) { }
  
  idPaciente: number;
  tarjetaCredito: TarjetaCredito;
  
  @Output() cancel = new EventEmitter();
    
  @Output() create = new EventEmitter();
  
  
   /**
    * le crea una tarjeta de credito al paciente
    */
    createTarjetaCredito():void{
      this.idPaciente = +this.route.snapshot.paramMap.get('id');
      this.pacienteService.createTarjetaCredito(this.idPaciente, this.tarjetaCredito)
          .subscribe(() => {this.create.emit();
              this.create.emit();
              this.toastr.success("La tarjeta de credito fue agregada", "Agregar Tarjeta Credito");
              }, err =>{
                  this.toastr.error("La tarjeta de credito no fue creada", "Agregar Tarjeta Credito");
              }
              );
        console.log(this.tarjetaCredito.numero);
  }
  
  /**
   * cancela la creacion de la tarjeta de credito
   */
  cancelCreation(): void{
      this.toastr.warning("La tarjeta de credito no fue creada", "Agregar Tarjeta Credito");
      this.cancel.emit();
  }

  ngOnInit() {
      this.tarjetaCredito = new TarjetaCredito;
  }

}
