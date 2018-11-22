import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {ToastrService} from 'ngx-toastr';
import {ExamenMedicoService} from '../examenmedico.service';
import {Laboratorio} from '../../laboratorio/laboratorio';

@Component({
  selector: 'app-examenmedico-laboratorio',
  templateUrl: './examenmedico-laboratorio.component.html',
  styleUrls: ['./examenmedico-laboratorio.component.css']
})
export class ExamenMedicoLaboratorioComponent implements OnInit {

   /**
   * constructor del componente
   */
  constructor(
      private examenService: ExamenMedicoService,
      private route: ActivatedRoute,
      private toastr: ToastrService) { }

    /**
     * id del examen
     */
     examen_id: number;
     
    /**
     * todas los laboratorios del examen
     */ 
    laboratorios: Laboratorio[];
    
    /**
     * obtiene todos los labs del examen
     */
    getLaboratoriosExamen():void{
        this.examenService.getLaboratoriosExamen(this.examen_id)
            .subscribe(laboratorios => {this.laboratorios = laboratorios},
            err => {this.toastr.error(err, "Error")});
    }
  
  /**
   * metodo para inicializar el componente
   */
  ngOnInit() {
      this.examen_id = +this.route.snapshot.paramMap.get('id');
      this.laboratorios = [];
      this.getLaboratoriosExamen();
  }



}
