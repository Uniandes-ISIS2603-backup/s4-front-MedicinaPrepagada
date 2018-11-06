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

  constructor(
      private pacienteService: PacienteService,
      private route: ActivatedRoute,
      private toastr: ToastrService) { }
      
      paciente_id:number;
      
    facturas: Factura[];
    
    getFacturasPaciente():void{
        this.pacienteService.getFacturasPaciente(this.paciente_id)
            .subscribe(facturas => {this.facturas = facturas},
            err => {this.toastr.error(err, "Error")});
    }

  ngOnInit() {
      this.paciente_id = +this.route.snapshot.paramMap.get('id');
      this.facturas = [];
      this.getFacturasPaciente();
  }

}
