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

    /**
     * Consturcor del componente
     */
    constructor(private pacienteService: PacienteService,
        private toastr: ToastrService,
        private route: ActivatedRoute) { }
  
        /**
         * id del paciente que se le asigna la tarjeta
         */
  idPaciente: number;
  tarjetaCredito: TarjetaCredito;
  
  /**
   * el output que le dice al componente que cancele la creacion
   */
  @Output() cancel = new EventEmitter();
    
  /**
   * el output que le dice al componente que el usuario creo el componente
   */
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
  }
  
  /**
   * cancela la creacion de la tarjeta de credito
   */
  cancelCreation(): void{
      this.toastr.warning("La tarjeta de credito no fue creada", "Agregar Tarjeta Credito");
      this.cancel.emit();
  }

  /**
   * funcion que inicializa el componente
   */
  ngOnInit() {
      this.tarjetaCredito = new TarjetaCredito;
  }

}
