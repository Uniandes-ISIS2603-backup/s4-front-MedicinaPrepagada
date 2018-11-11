import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {Medico} from '../medico';
import {ToastrService} from 'ngx-toastr';

import {MedicoService} from '../medico.service';

@Component({
  selector: 'app-medico-detail',
  templateUrl: './medico-detail.component.html',
  styleUrls: ['./medico-detail.component.css']
})

/**
 * componente para el detalle de un medico
 */
export class MedicoDetailComponent implements OnInit {

/**
    * The component's constructor
    * @param medicoService The mediSistemas service
    */
  constructor(
        private medicoService: MedicoService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService
        ) {}
        
        /**
    * The medico whose details we want to show
    */
    medico: Medico;
    
    /**
     * identificador del medico
     */
    idMed: number;
    
    /**
     * Funcion que llama el servicio que obtiene un médico en detalle
     */
    getMedico(): void {
        this.medicoService.getMedico(this.idMed)
            .subscribe(medico => {
            this.medico = medico}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }

/**
 * Método llama al crear un nuevo componente
 */
  ngOnInit() {
      this.idMed = +this.route.snapshot.paramMap.get('id');
      this.medico = new Medico;
      this.getMedico();
  }

}
