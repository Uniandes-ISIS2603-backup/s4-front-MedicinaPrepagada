import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {FarmaciaService} from '../farmacia.service';
import {FarmaciaDetail} from '../farmacia-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-farmacia-edit',
  templateUrl: './farmacia-edit.component.html',
  styleUrls: ['./farmacia-edit.component.css']
})
export class FarmaciaEditComponent implements OnInit, OnChanges {

  /**
    * The component's constructor
    * @param farmaciaService The farmacia's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private farmaciaService: FarmaciaService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the farmacia that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() farmacia_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an farmacia
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new farmacia
    */
    @Output() update = new EventEmitter();

    /**
    * The farmacia to edit
    */
    farmacia: FarmaciaDetail;

    /**
    * Retrieves the information of the farmacia
    */
    getFarmacia(): void {
        this.farmaciaService.getFarmaciaDetail(this.farmacia_id)
            .subscribe(farmacia => {
                this.farmacia = farmacia;
            });
    }

    /**
    * Updates the farmacia's information
    */
    editFarmacia(): void {
        this.farmaciaService.updateFarmacia(this.farmacia)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La información de la farmacia fue actualizada", "Editar farmacia");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the farmacia
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.farmacia = new FarmaciaDetail();
        this.getFarmacia();
    }

    /**
    * The function which is called every time the user chooses to edit a different farmacia
    */
    ngOnChanges() {
        this.ngOnInit();
    }
    
}
