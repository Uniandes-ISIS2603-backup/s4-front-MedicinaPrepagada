import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MedicamentoService} from '../medicamento.service';
import {ActivatedRoute} from '@angular/router/';
import {ToastrService} from 'ngx-toastr';
import {Farmacia} from '../../farmacia/farmacia';
import {Medicamento} from '../medicamento';

@Component({
  selector: 'app-medicamento-farmacia-add',
  templateUrl: './medicamento-farmacia-add.component.html',
  styleUrls: ['./medicamento-farmacia-add.component.css']
})
export class MedicamentoFarmaciaAddComponent implements OnInit {

 /**
     * Consturcor del componente
     */
    constructor(private medicamentoService: MedicamentoService,
        private toastr: ToastrService,
        private route: ActivatedRoute) { }
  
  /**
   * id del medicamento al que se le va a añadir la farmacia
   */      
  idMedicamento: number;
  
  /**
   * id de la farmacia que se quiere agregar, debe existir
   */
  idFarmacia: number;
  
  farmacia: Farmacia;
  
  /**
   * el output que le dice al componente que cancele la agregación
   */
  @Output() cancel = new EventEmitter();
    
  /**
   * el output que le dice al componente que el usuario creo el componente
   */
  @Output() create = new EventEmitter();
  
  
   /**
    * le agrega una farmacia al medicamento
    */
    addFarmacia():void{
      this.idMedicamento = +this.route.snapshot.paramMap.get('id');
      this.medicamentoService.addFarmacia(this.idMedicamento, this.farmacia.id)
          .subscribe(() => {this.create.emit();
              this.create.emit();
              this.toastr.success("La farmacia fue agregada", "Agregar farmacia");
              }, err =>{
                  this.toastr.error("La farmacia no fue agregada", "Agregar farmacia");
              }
              );
  }
  
  /**
   * cancela la agregación de la farmacia.
   */
  cancelAdd(): void{
      this.toastr.warning("La farmacia no fue agregada", "Agregar farmacia");
      this.cancel.emit();
  }

  /**
   * funcion que inicializa el componente
   */
  ngOnInit() {
      this.farmacia = new Farmacia;
      this.idMedicamento = +this.route.snapshot.paramMap.get('id');
      this.idFarmacia = 0
  }

}
