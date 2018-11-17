import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {MedicamentoService} from '../medicamento.service';
import {MedicamentoDetail} from '../medicamento-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-medicamento-edit',
  templateUrl: './medicamento-edit.component.html',
  styleUrls: ['./medicamento-edit.component.css']
})
export class MedicamentoEditComponent implements OnInit, OnChanges { 
    
     /**
    * The component's constructor
    * @param medicamentoService The medicamento's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private medicamentoService: MedicamentoService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the medicamento that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() medicamento_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an medicamento
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new medicamento
    */
    @Output() update = new EventEmitter();

    /**
    * The medicamento to edit
    */
    medicamento: MedicamentoDetail;

    /**
    * Retrieves the information of the medicamento
    */
    getMedicamento(): void {
        this.medicamentoService.getMedicamentoDetail(this.medicamento_id)
            .subscribe(medicamento => {
                this.medicamento = medicamento;
            });
    }

    /**
    * Updates the medicamento's information
    */
    editMedicamento(): void {
        this.medicamentoService.updateMedicamento(this.medicamento)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La información del medicamento fue actualizada exitosamente", "Edición de medicamento");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the medicamento
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.medicamento = new MedicamentoDetail();
        this.getMedicamento();
    }

    /**
    * The function which is called every time the user chooses to edit a different medicamento
    */
    ngOnChanges() {
        this.ngOnInit();
    }
    
}
