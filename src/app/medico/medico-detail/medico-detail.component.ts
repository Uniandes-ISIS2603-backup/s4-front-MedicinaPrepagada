import { Component, OnInit, Input , ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router/';
//import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {Medico} from '../medico';
import {ToastrService} from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import {MedicoService} from '../medico.service';
import {EspecialidadService} from '../../especialidad/especialidad.service';
import {Especialidad} from '../../especialidad/especialidad';

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
        private toastrservice: ToastrService,
        private modalDialog: ModalDialogService,
        private viewRef: ViewContainerRef
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
     * elimina el medico mostrado
     */
    deleteMedico():void{
        this.modalDialog.openDialog(this.viewRef,{
            title:'Eliminar Medico',
            childComponent: SimpleModalComponent,
            data:{
                text:'Esta seguro de que desea eliminar el médico'
            },
            actionButtons:[
                {
                    text:'Si',
                    buttonClass:'btn btn-danger',
                    onAction:()=>{
                        this.medicoService.deleteMedico(this.idMed)
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
      this.idMed = +this.route.snapshot.paramMap.get('id');
//      this.medico = new Medico;
      this.getMedico();
  }

}
