import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { ToastrService } from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog'; 


import {FarmaciaService} from '../farmacia.service';
import {Farmacia} from '../farmacia';
import {FarmaciaDetail} from '../farmacia-detail';


@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia-list.component.html',
  styleUrls: ['./farmacia-list.component.css']
})
export class FarmaciaListComponent implements OnInit {

    constructor(
        private farmaciaService: FarmaciaService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }
   /**
    * The list of farmacias
    */
   @Input() farmacias: Farmacia[];

    /**
    * Shows or hides the farmacia-create-component
    */
    showCreate: boolean;
    
     /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;
    
    /**
    * The id of the farmacia that the user wants to view
    */
    farmacia_id: number;
    
    /**
     * The id of the farmacia being edited.
     */
    farmacia_edit_id: number;
    /**
     * the farmacia that the user views.
     */
    selectedFarmacia : Farmacia;
   
    getFarmacias(): void {
        this.farmaciaService.getFarmacias()
            .subscribe(farmacias => this.farmacias = farmacias);
    }
    
    onSelected(farmacia_id: number):void {
        this.farmacia_id = farmacia_id;
        this.selectedFarmacia = new FarmaciaDetail();
        this.getFarmaciaDetail();     
    }
    
    getFarmaciaDetail(): void {
        this.farmaciaService.getFarmaciaDetail(this.farmacia_id)
            .subscribe(selectedFarmacia => {
                this.selectedFarmacia = selectedFarmacia
            });
     }

 /**
    * Shows or hides the create component
    */
    showHideEdit(farmacia_id: number): void {
        if (!this.showEdit || (this.showEdit && farmacia_id != this.farmacia_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.farmacia_edit_id = farmacia_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateFarmacia(): void {
        this.showEdit = false;
    }

    /**
    * Deletes an farmacia
    */
    deleteFarmacia(farmaciaId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar una farmacia',
            childComponent: SimpleModalComponent,
            data: {text: '¿Está seguro que quiere eliminar esta farmacia de la base de datos de Medisistemas?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.farmaciaService.deleteFarmacia(farmaciaId).subscribe(() => {
                            this.toastrService.error("La farmacia fue eliminada exitosamente", "Farmacia eliminada");
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
    * This will initialize the component by retrieving the list of farmacias from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getFarmacias();
    }

  /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedFarmacia) {
            this.selectedFarmacia = undefined;
            this.farmacia_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
}


