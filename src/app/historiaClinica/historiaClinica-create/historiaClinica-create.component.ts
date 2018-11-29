/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {HistoriaClinicaService} from '../historiaClinica.service';
import {HistoriaClinica} from '../historiaClinica';
import {Router} from '@angular/router';

@Component({
  selector: 'app-historiaClinica-create',
  templateUrl: './historiaClinica-create.component.html',
  styleUrls: ['./historiaClinica-create.component.css']
})
export class HistoriaClinicaCreateComponent implements OnInit {

    /**
     * Contructor de HistoriaClinicaCreateComponent
    */
    constructor(private historiaClinicaService: HistoriaClinicaService,
                private toastr: ToastrService, 
                private router: Router
    ) { }
    
    /**
     * Atributo de tipo HistoriaClinica
    */
    historiaClinica: HistoriaClinica;
    
    /**
     * Output para cancelar la creacion de una historia clinica
    */
    @Output() cancel = new EventEmitter();
    
    /**
     * Output para crear una histria clinica
    */
    @Output() create = new EventEmitter();
    
    
    /**
     * Metodo para crear una HistoriaClinica
    */
    createHistoriaClinica(): void
        {
        this.historiaClinicaService.createHistoriaClinica(this.historiaClinica)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("La historia clinica fue creada", "Creacion Historia Clinica");  
                this.router.navigate(['historiasClinicas/list']);    
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }
    
    /**
     * Metodo para cancelar la creacion de una historia clinica
    */
    cancelCreation() : void{
        this.cancel.emit();
    }

    /**
     * Metodo para inicializar el componente
    */
    ngOnInit() {
      this.historiaClinica = new HistoriaClinica();
    }

}


