import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {CitaMedica} from '../cita-medica';
import {ToastrService} from 'ngx-toastr';

import {CitaMedicaService} from '../cita-medica.service';

@Component({
  selector: 'app-cita-medica-detail',
  templateUrl: './cita-medica-detail.component.html',
  styleUrls: ['./cita-medica-detail.component.css']
})

/**
 * componente para el detalle de una cita medica
 */
export class CitaMedicaDetailComponent implements OnInit {
/**
    * The component's constructor
    * @param citaMedicaService The mediSistemas service
    */
  constructor(
        private citaMedicaService: CitaMedicaService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService
        ) {}
        
        /**
    * The cita medica whose details we want to show
    */
    citaMedica: CitaMedica;
    
    /**
     * identificador de la cita
     */
    idCita: number;
    
    /**
     * Funcion que llama el servicio que obtiene una cita médica en detalle
     */
    getCitaMedica(): void {
        this.citaMedicaService.getCitaMedica(this.idCita)
            .subscribe(citaMedica => {
            this.citaMedica = citaMedica}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }

/**
 * Método llama al crear un nuevo componente
 */
  ngOnInit() {
      this.idCita = this.route.snapshot.paramMap.get('id');
      this.citaMedica = new CitaMedica;
      this.getCitaMedica();
  }

}
