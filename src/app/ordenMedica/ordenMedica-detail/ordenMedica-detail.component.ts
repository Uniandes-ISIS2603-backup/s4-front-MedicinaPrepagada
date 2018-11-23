/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router/';


import {OrdenMedica} from '../ordenMedica';
import {ToastrService} from 'ngx-toastr';

import {OrdenMedicaService} from '../ordenMedica.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

@Component({
  selector: 'app-ordenMedica-detail',
  templateUrl: './ordenMedica-detail.component.html',
  styleUrls: ['./ordenMedica-detail.component.css']
})
export class OrdenMedicaDetailComponent implements OnInit {

    constructor(
        private ordenMedicaService: OrdenMedicaService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrservice: ToastrService
        ) {}
        
    ordenMedica: OrdenMedica;
    
    ordenMedica_id: number;
    
    getOrdenMedica(): void 
        {
        this.ordenMedicaService.getOrdenMedica(this.ordenMedica_id)
            .subscribe(ordenMedica => {
            this.ordenMedica = ordenMedica}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }
    
    deleteOrdenMedica(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Borrar una orden medica',
            childComponent: SimpleModalComponent,
            data: {text: 'Está seguro que desea eliminar esta orden medica?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.ordenMedicaService.deleteOrdenMedica(this.ordenMedica_id).subscribe(ordenMedicabook => {
                            this.toastrservice.success("Orden medica ", "Eliminada exitosamente");
                            this.router.navigate(['ordenesMedicas/list']);
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
    
    volver (): void 
    {
        this.router.navigate(['ordenesMedicas/list']);
    }

  ngOnInit() {
      this.ordenMedica_id = +this.route.snapshot.paramMap.get('id');
      this.ordenMedica = new OrdenMedica;
      this.getOrdenMedica();
  }

}
