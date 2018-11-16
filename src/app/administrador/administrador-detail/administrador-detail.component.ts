/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {Administrador} from '../administrador';
import {ToastrService} from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import {AdministradorService} from '../administrador.service';

@Component({
  selector: 'app-administrador-detail',
  templateUrl: './administrador-detail.component.html',
  styleUrls: ['./administrador-detail.component.css']
})
export class AdministradorDetailComponent implements OnInit {

    constructor(
        private administradorService: AdministradorService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef

        ) {}
        
    administrador: Administrador;
    
    administrador_id: number;
    
    getAdministrador(): void {
        this.administradorService.getAdministrador(this.administrador_id)
            .subscribe(administrador => {
            this.administrador = administrador}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }
    
    deleteAdministrador(admi_id): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar un administrador',
            childComponent: SimpleModalComponent,
            data: {text: 'Está seguro que desea eliminar este administrador?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.administradorService.deleteAdministrador(admi_id).subscribe(() => {
                            this.toastrservice.error("El administrador fue eliminado exitosamente", "Administrador eliminado");
                            this.ngOnInit();
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

  ngOnInit() {
      this.administrador_id = +this.route.snapshot.paramMap.get('id');
      this.administrador = new Administrador;
      this.getAdministrador();
  }

}
