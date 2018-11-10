import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {ToastrService} from 'ngx-toastr';
import {PacienteService} from '../paciente.service';

import {Factura} from '../../factura/factura';
@Component({
  selector: 'app-paciente-facturas',
  templateUrl: './paciente-facturas.component.html',
  styleUrls: ['./paciente-facturas.component.css']
})
export class PacienteFacturasComponent implements OnInit {

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
    paciente_id:number;
      
    /**
     * Lista de todas las facturas del paciente
     */
    facturas: Factura[];
    
    /**
     * obtiene todas las facturas del paciente
     */
    getFacturasPaciente():void{
        this.pacienteService.getFacturasPaciente(this.paciente_id)
            .subscribe(facturas => {this.facturas = facturas},
            err => {this.toastr.error(err, "Error")});
    }

  /**
   * metodo para inicializar el componente
   */
  ngOnInit() {
      this.paciente_id = +this.route.snapshot.paramMap.get('id');
      this.facturas = [];
      this.getFacturasPaciente();
  }

}
