import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ExamenMedicoService } from '../examenmedico.service';

import { ExamenMedico } from '../examenmedico';

@Component({
    selector: 'app-examenmedico-create',
    templateUrl: './examenmedico-create.component.html',
    styleUrls: ['./examenmedico-create.component.css']
})
export class ExamenMedicoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param examenService The medicamentos' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private examenService: ExamenMedicoService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new examen
    */
    examen: ExamenMedico;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an examen
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new medicamento
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new examen
    */
    createExamenMedico(): void {
        this.examenService.createExamenMedico(this.examen)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The examen was created", "Examen creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
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
        this.examen = new ExamenMedico();
    }
}
}
