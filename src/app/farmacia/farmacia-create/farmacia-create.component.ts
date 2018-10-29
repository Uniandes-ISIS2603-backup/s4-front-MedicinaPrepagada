import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { FarmaciaService } from '../farmacia.service';

import { Farmacia } from '../farmacia';

@Component({
    selector: 'app-farmacia-create',
    templateUrl: './farmacia-create.component.html',
    styleUrls: ['./farmacia-create.component.css']
})
export class FarmaciaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param farmaciaService The farmacias' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private farmaciaService: FarmaciaService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new farmacia
    */
    farmacia: Farmacia;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an farmacia
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new farmacia
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new farmacia
    */
    createFarmacia(): void {
        this.farmaciaService.createFarmacia(this.farmacia)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The farmacia was created", "Farmacia creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to create an farmacia
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.farmacia = new Farmacia();
    }
}

