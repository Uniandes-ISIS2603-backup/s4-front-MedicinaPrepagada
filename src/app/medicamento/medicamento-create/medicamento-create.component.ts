import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { MedicamentoService } from '../medicamento.service';

import { Medicamento } from '../medicamento';

@Component({
    selector: 'app-medicamento-create',
    templateUrl: './medicamento-create.component.html',
    styleUrls: ['./medicamento-create.component.css']
})
export class MedicamentoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param medicamentoService The medicamentos' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private medicamentoService: MedicamentoService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new medicamento
    */
    medicamento: Medicamento;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an medicamento
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new medicamento
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new medicamento
    */
     createMedicamento(): Medicamento {
       
        this.medicamentoService.createMedicamento(this.medicamento)
            .subscribe((medicamento) => {
                this.medicamento = medicamento;
                this.create.emit();
                this.toastrService.success("El medicamento fue creado", "Creacion de medicamento");                
            });
            return this.medicamento;
    }

    /**
    * Informs the parent component that the user no longer wants to create an medicamento
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.medicamento = new Medicamento();
    }
}
