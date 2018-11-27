import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {Especialidad} from '../especialidad';
import {ToastrService} from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import {EspecialidadService} from '../especialidad.service';

@Component({
  selector: 'app-especialidad-detail',
  templateUrl: './especialidad-detail.component.html',
  styleUrls: ['./especialidad-detail.component.css']
})

/**
 * componente para el detalle de una especialidad
 */
export class EspecialidadDetailComponent implements OnInit {

/**
    * The component's constructor
    * 
    */
  constructor(private especialidadService: EspecialidadService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService,
        private modalDialog: ModalDialogService,
        private viewRef: ViewContainerRef
        ) { }

    /**
    * The especialidad whose details we want to show
    */
    especialidad: Especialidad;
    
    /**
     * identificador de especialidad
     */
    nombreEsp: string;
    
/**
     * Funcion que llama el servicio que obtiene una especiaalidad en detalle
     */
    getEspecialidad(): void {
        this.especialidadService.getEspecialidad(this.nombreEsp)
            .subscribe(especialidad => {
            this.especialidad = especialidad}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }
    
    /**
     * elimina el medico mostrado
     */
    deleteEspecialidad():void{
        this.modalDialog.openDialog(this.viewRef,{
            title:'Eliminar Especialidad',
            childComponent: SimpleModalComponent,
            data:{
                text:'Esta seguro de que desea eliminar la especialidad?'
            },
            actionButtons:[
                {
                    text:'Si',
                    buttonClass:'btn btn-danger',
                    onAction:()=>{
                        this.especialidadService.deleteEspecialidad(this.nombreEsp)
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
      var nombreE = this.route.snapshot.paramMap.get('id');
      console.log(nombreE);
      this.nombreEsp = nombreE;
      console.log(this.nombreEsp);
      this.especialidad = new Especialidad;
      this.getEspecialidad();
  }

}
