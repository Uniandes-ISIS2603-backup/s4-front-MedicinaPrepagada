import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import {ExamenMedicoService} from '../examenmedico.service';
import {ExamenMedicoDetail} from '../examenmedico-detail';
import { ToastrService } from 'ngx-toastr';

import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog'; 

import {ExamenMedico} from '../examenmedico';

@Component({
  selector: 'app-examenmedico',
  templateUrl: './examenmedico-list.component.html',
  styleUrls: ['./examenmedico-list.component.css']
})
export class ExamenMedicoListComponent implements OnInit {

    constructor(
        private examenService: ExamenMedicoService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }
    
    /**
    * The list of examenes 
    */
    @Input() examenes: ExamenMedico[];

    /**
    * Shows or hides the examenmedico-create-component
    */
    showCreate: boolean;
    
    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;
    
    /**
     * The id of the examen being edited.
     */
    examen_edit_id: number;
    
    /**
    * The id of the examen that the user wants to view
    */
    examen_id: number;
    
    /**
     * the farmacia that the user views.
     */
    selectedExamen : ExamenMedico;
        
    getExamenesMedicos(): void {
        this.examenService.getExamenesMedicos()
            .subscribe(examenes => this.examenes = examenes);
    }
    
    onSelected(examen_id: number):void {
        this.examen_id = examen_id;
        this.selectedExamen = new ExamenMedicoDetail();
        this.getExamenMedicoDetail();     
    }
    
    getExamenMedicoDetail(): void {
        this.examenService.getExamenMedicoDetail(this.examen_id)
            .subscribe(selectedExamen => {
                this.selectedExamen = selectedExamen
            });
     }


 /**
    * Shows or hides the edit component
    */
    showHideEdit(examen_id: number): void {
        if (!this.showEdit || (this.showEdit && examen_id != this.examen_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.examen_edit_id = examen_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateExamenMedico(): void {
        this.showEdit = false;
    }

    /**
    * Deletes an examen
    */
    deleteExamenMedico(examenId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar un examen médico',
            childComponent: SimpleModalComponent,
            data: {text: '¿Está seguro que quiere eliminar este examen médico de la base de datos de Medisistemas?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.examenService.deleteExamenMedico(examenId).subscribe(() => {
                            this.toastrService.error("El examen fue eliminado exitosamente", "Examen médico eliminado");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }



    /**
    * This will initialize the component by retrieving the list of medicamentos from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getExamenesMedicos();
    }
  
  
  /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedExamen) {
            this.selectedExamen = undefined;
            this.examen_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }

}


