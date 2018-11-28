import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {CitaMedica} from '../cita-medica';
import {ToastrService} from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

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
        private toastrservice: ToastrService,
        private modalDialog: ModalDialogService,
        private viewRef: ViewContainerRef
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
     * elimina el medico mostrado
     */
    deleteCitaMedica():void{
        this.modalDialog.openDialog(this.viewRef,{
            title:'Eliminar Cita',
            childComponent: SimpleModalComponent,
            data:{
                text:'Esta seguro de que desea cancelar la cita'
            },
            actionButtons:[
                {
                    text:'Si',
                    buttonClass:'btn btn-danger',
                    onAction:()=>{
                        this.citaMedicaService.deleteCitaMedica(this.idCita)
                            .subscribe(() => {}, err =>{
                                this.toastrservice.error(err, "Error");
                        });
                        return true;
                    },
                    
                },
                {
                    text:'Cancelar',
                    onAction: () => true
                }
            ]
        });
    }

/**
 * Método llama al crear un nuevo componente
 */
  ngOnInit() {
      this.idCita = +this.route.snapshot.paramMap.get('id');
      this.citaMedica = new CitaMedica;
      this.getCitaMedica();
  }

}
