/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {HistoriaClinicaService} from '../historiaClinica.service';
import {ToastrService} from 'ngx-toastr';
import { HistoriaClinica } from '../historiaClinica';

@Component({
    selector: 'app-historiaClinica-edit',
    templateUrl: './historiaClinica-edit.component.html',
    styleUrls: ['./historiaClinica-edit.component.css']
})

export class HistoriaClinicaEditComponent implements OnInit, OnChanges 
{

    constructor(
       
        private histService: HistoriaClinicaService,
        private toastrService: ToastrService,
    ) {}

    hist: HistoriaClinica; 
    
    @Output() cancel = new EventEmitter();
    @Output() update = new EventEmitter();
    
    getHistoriaClinica(): void {
        this.histService.getHistoriaClinica(this.hist)
            .subscribe(hist => {
                this.hist = hist;
            });
    }

    updateHistoriaClinica(): void {
        this.histService.updateHistoriaClinica(this.hist)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("Se ha modificado exitosamente", "Historia Clinica modificada");
            });
        this.update.emit();
    }

    cancelEdition(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.hist = new HistoriaClinica( ); 
        this.getHistoriaClinica();  
    }

    ngOnChanges() {
        this.ngOnInit();
    }

}
