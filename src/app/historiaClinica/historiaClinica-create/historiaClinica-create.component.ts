/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {HistoriaClinicaService} from '../historiaClinica.service';
import {HistoriaClinica} from '../historiaClinica';

@Component({
  selector: 'app-historiaClinica-create',
  templateUrl: './historiaClinica-create.component.html',
  styleUrls: ['./historiaClinica-create.component.css']
})
export class HistoriaClinicaCreateComponent implements OnInit {

    constructor(private historiaClinicaService: HistoriaClinicaService,
                private toastr: ToastrService
    ) { }
    
    historiaClinica: HistoriaClinica;
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
    createHistoriaClinica(): void
        {
        this.historiaClinicaService.createHistoriaClinica(this.historiaClinica)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("La historia clinica fue creada", "Creacion Historia Clinica");      
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }
    
    cancelCreation() : void{
        this.cancel.emit();
    }

  ngOnInit() {
      this.historiaClinica = new HistoriaClinica();
  }

}


