import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
     createExamenMedico(): ExamenMedico {
       
        this.examenService.createExamenMedico(this.examen)
            .subscribe((examen) => {
                this.examen = examen;
                this.create.emit();
                this.toastrService.success("The examen medico was created", "Examen medico creation");                
            });
            return this.examen;
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

