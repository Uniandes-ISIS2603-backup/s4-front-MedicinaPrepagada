/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router/';
import {HistoriaClinica} from '../historiaClinica';
import {ToastrService} from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import {HistoriaClinicaService} from '../historiaClinica.service';

@Component({
  selector: 'app-historiaClinica-detail',
  templateUrl: './historiaClinica-detail.component.html',
  styleUrls: ['./historiaClinica-detail.component.css']
})
export class HistoriaClinicaDetailComponent implements OnInit {

    /**
     * Contructor de HistoriaClinicaDetailComponent
    */
    constructor(
        private historiaClinicaService: HistoriaClinicaService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef
        ) {}
        
    /**
     * Atributo de tipo HistoriaClinica
    */
    historiaClinica: HistoriaClinica;
    
    /**
     * Identificador de la HistoriaClinica
    */
    historiaClinica_id: number;
    
    /**
     * Metodo para obenter una historia clinica con el identificador dado
    */
    getHistoriaClinica(): void 
        {
        this.historiaClinicaService.getHistoriaClinica(this.historiaClinica_id)
            .subscribe(historiaClinica => {
            this.historiaClinica = historiaClinica}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }
    
    /**
     * Metodo para eliminar una historia clinica
    */
    deleteHistoriaClinica(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Borrar una historia clinica',
            childComponent: SimpleModalComponent,
            data: {text: 'Está seguro que desea eliminar esta historia clinica?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.historiaClinicaService.deleteHistoriaClinica(this.historiaClinica_id).subscribe(historiaClinicabook => {
                            this.toastrservice.success("Historia Clinica  ", "Eliminada exitosamente");
                            this.router.navigate(['historiasClinicas/list']);
                        }, err => {
                            this.toastrservice.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }
    
    /**
     * Metodo para volver a la lista de historias clinicas
    */
     volver (): void 
    {
        this.router.navigate(['historiasClinicas/list']);
    }

    /**
     * Metodo para inicializar el componente
    */
    ngOnInit() {
      this.historiaClinica_id = +this.route.snapshot.paramMap.get('id');
      this.historiaClinica = new HistoriaClinica;
      this.getHistoriaClinica();
    }

}
