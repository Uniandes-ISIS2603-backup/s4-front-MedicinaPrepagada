import { Component, OnInit } from '@angular/core';
import {ExamenMedicoService} from '../examenmedico.service';
import {ExamenMedicoDetail} from '../examenmedico-detail';

import {ExamenMedico} from '../examenmedico';

@Component({
  selector: 'app-examenmedico',
  templateUrl: './examenmedico-list.component.html',
  styleUrls: ['./examenmedico-list.component.css']
})
export class ExamenMedicoListComponent implements OnInit {

    constructor(private examenService: ExamenMedicoService) { }
    
    /**
    * The list of examenes 
    */
    examenes: ExamenMedico[];

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

//    /**
//    * Deletes an medicamento
//    */
//    deleteMedicamento(medicamentoId): void {
//        this.modalDialogService.openDialog(this.viewRef, {
//            title: 'Delete an medicamento',
//            childComponent: SimpleModalComponent,
//            data: {text: 'Are you sure your want to delete this medicamento from the BookStore?'},
//            actionButtons: [
//                {
//                    text: 'Yes',
//                    buttonClass: 'btn btn-danger',
//                    onAction: () => {
//                        this.medicamentoService.deleteMedicamento(medicamentoId).subscribe(() => {
//                            this.toastrService.error("The medicamento was successfully deleted", "Medicamento deleted");
//                            this.ngOnInit();
//                        }, err => {
//                            this.toastrService.error(err, "Error");
//                        });
//                        return true;
//                    }
//                },
//                {text: 'No', onAction: () => true}
//            ]
//        });
//    }



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


