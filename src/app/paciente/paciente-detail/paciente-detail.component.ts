import {Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {Paciente} from '../paciente';
import {ToastrService} from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import {PacienteService} from '../paciente.service';

@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: ['./paciente-detail.component.css']
})
export class PacienteDetailComponent implements OnInit {

    /**
     * constructor del componente
     */
    constructor(
        private pacienteService: PacienteService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService,
        private modalDialog: ModalDialogService,
        private viewRef: ViewContainerRef
        ) {}
      
    /**
     * paciente que se mostrara
     */  
    paciente: Paciente;
    
    /**
     * id del paciente
     */
    paciente_id: number;
    
    /**
     * obtiene el paciente
     */
    getPaciente(): void {
        this.pacienteService.getPaciente(this.paciente_id)
            .subscribe(paciente => {
            this.paciente = paciente}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }
    
    /**
     * elimina el paciente mostrado
     */
    deletePaciente():void{
        this.modalDialog.openDialog(this.viewRef,{
            title:'Eliminar Paciente',
            childComponent: SimpleModalComponent,
            data:{
                text:'Esta seguro de que desea eliminar el paciente'
            },
            actionButtons:[
                {
                    text:'Si',
                    buttonClass:'btn btn-danger',
                    onAction:()=>{
                        this.pacienteService.deletePaciente(this.paciente_id)
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
   * metodo para inicializar el componente
   */
  ngOnInit() {
      this.paciente_id = +this.route.snapshot.paramMap.get('id');
      this.paciente = new Paciente;
      this.getPaciente();
      
  }

}
