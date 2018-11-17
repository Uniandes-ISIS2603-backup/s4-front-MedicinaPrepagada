import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {ToastrService} from 'ngx-toastr';
import {MedicamentoService} from '../medicamento.service';

import {Farmacia} from '../../farmacia/farmacia';

@Component({
  selector: 'app-medicamento-farmacia',
  templateUrl: './medicamento-farmacia.component.html',
  styleUrls: ['./medicamento-farmacia.component.css']
})
export class MedicamentoFarmaciaComponent implements OnInit {

   /**
   * constructor del componente
   */
  constructor(
      private medicamentoService: MedicamentoService,
      private route: ActivatedRoute,
      private toastr: ToastrService) { }

    /**
     * id del medicamento
     */
     medicamento_id: number;
     
    /**
     * todas las citas de laboratorio del medicamento
     */ 
    farmacias: Farmacia[];
    
    /**
     * obtiene todas las farmacias del medicamento
     */
    getFarmaciasMedicamento():void{
        this.medicamentoService.getFarmaciasMedicamento(this.medicamento_id)
            .subscribe(farmacias => {this.farmacias = farmacias},
            err => {this.toastr.error(err, "Error")});
    }
  
  /**
   * metodo para inicializar el componente
   */
  ngOnInit() {
      this.medicamento_id = +this.route.snapshot.paramMap.get('id');
      this.farmacias = [];
      this.getFarmaciasMedicamento();
  }


}
