import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {ExamenMedicoService} from '../examenmedico.service';
import {ExamenMedicoDetail} from '../examenmedico-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-examenmedico-edit',
  templateUrl: './examenmedico-edit.component.html',
  styleUrls: ['./examenmedico-edit.component.css']
})
export class ExamenMedicoEditComponent implements OnInit, OnChanges {

 /**
    * The component's constructor
    * @param examenService The examen's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private examenService: ExamenMedicoService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the examen that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() examen_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an examen
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new examen
    */
    @Output() update = new EventEmitter();

    /**
    * The examen to edit
    */
    examen: ExamenMedicoDetail;

    /**
    * Retrieves the information of the examen
    */
    getExamenMedico(): void {
        this.examenService.getExamenMedicoDetail(this.examen_id)
            .subscribe(examen => {
                this.examen = examen;
            });
    }

    /**
    * Updates the examen's information
    */
    editExamenMedico(): void {
        this.examenService.updateExamenMedico(this.examen)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The examen's information was updated", "ExamenMedico edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the examen
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.examen = new ExamenMedicoDetail();
        this.getExamenMedico();
    }

    /**
    * The function which is called every time the user chooses to edit a different examen
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
