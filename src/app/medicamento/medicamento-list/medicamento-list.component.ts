import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
//import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog'; 

import {MedicamentoService} from '../medicamento.service';
import { ToastrService } from 'ngx-toastr';

import {Medicamento} from '../medicamento';
import {MedicamentoDetail} from '../medicamento-detail';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento-list.component.html',
  styleUrls: ['./medicamento-list.component.css']
})
export class MedicamentoListComponent implements OnInit {

    constructor(
        private medicamentoService: MedicamentoService,
//        private modalDialogService: ModalDialogService,
//        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }
    
    /**
    * The list of medicamentos which belong to the BookStore
    */
    @Input() medicamentos: Medicamento[];

    /**
    * Shows or hides the medicamento-create-component
    */
    showCreate: boolean;
    
    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;
    
      /**
     * The id of the medicamento being edited.
     */
    medicamento_edit_id: number;
    
    /**
    * The id of the medicamento that the user wants to view
    */
    medicamento_id: number;
    
    /**
     * the medicamento that the user views.
     */
    selectedMedicamento : Medicamento;
    
    getMedicamentos(): void {
        this.medicamentoService.getMedicamentos()
            .subscribe(medicamentos => this.medicamentos = medicamentos);
    }
    
      onSelected(medicamento_id: number):void {
        this.medicamento_id = medicamento_id;
        this.selectedMedicamento = new MedicamentoDetail();
        this.getMedicamentoDetail();     
    }
    
    getMedicamentoDetail(): void {
        this.medicamentoService.getMedicamentoDetail(this.medicamento_id)
            .subscribe(selectedMedicamento => {
                this.selectedMedicamento = selectedMedicamento
            });
     }

  /**
    * Shows or hides the create component
    */
    showHideEdit(medicamento_id: number): void {
        if (!this.showEdit || (this.showEdit && medicamento_id != this.medicamento_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.medicamento_edit_id = medicamento_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateMedicamento(): void {
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
        this.getMedicamentos();
    }
  
  /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedMedicamento) {
            this.selectedMedicamento = undefined;
            this.medicamento_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }

}

