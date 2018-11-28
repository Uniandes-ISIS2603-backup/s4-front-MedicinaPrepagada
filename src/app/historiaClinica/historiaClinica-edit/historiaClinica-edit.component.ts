/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {HistoriaClinicaService} from '../historiaClinica.service';
import {ToastrService} from 'ngx-toastr';
import { HistoriaClinica } from '../historiaClinica';
import {ActivatedRoute, Router} from '@angular/router';

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
        private route: ActivatedRoute,
        private router: Router 
    ) {}

    @Input() historia_id;
    historiaClinica: HistoriaClinica; 
    @Output() cancel = new EventEmitter();
    @Output() update = new EventEmitter();
    
    getHistoriaClinica(): void {
        this.histService.getHistoriaClinica(this.historia_id)
            .subscribe(hist => {
                this.historiaClinica = hist;
           }, err =>  {this.toastrService.error(err, "Error"); })
    }

    updateHistoriaClinica(): void 
    {
         var hist_edit =
        {
          fecha: this.historiaClinica.fecha,
          descripcionDiagnostico: this.historiaClinica.descripcionDiagnostico,
          alergias: this.historiaClinica.alergias,
          peso: this.historiaClinica.peso,
          estatura: this.historiaClinica.estatura,
          fuma: this.historiaClinica.fuma,
          bebe: this.historiaClinica.bebe,
          operaciones: this.historiaClinica.operaciones
        }
        this.histService.updateHistoriaClinica(hist_edit, this.historia_id)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("Se ha modificado exitosamente", "Historia Clinica modificada");
                this.router.navigate(['/historiasClinicas/' + this.historia_id]);
       }, err =>{
          this.toastrService.error(err, "Error");
      });
  }

    cancelEdition(): void {
        this.toastrService.warning('La historia clinica no fue editada', 'Editar Historia Clinica');
        this.router.navigate(['/historiasClinicas/' + this.historia_id]);
        this.cancel.emit();
    }

    ngOnInit() {
        this.historia_id = + this.route.snapshot.paramMap.get('id');
        console.log(this.historia_id);
        this.historiaClinica = new HistoriaClinica( ); 
        this.getHistoriaClinica(); 
    }

    ngOnChanges() {
        this.ngOnInit();
    }

}
