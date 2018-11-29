/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router/';
import {Administrador} from '../administrador';
import {ToastrService} from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import {AdministradorService} from '../administrador.service';

@Component({
  selector: 'app-administrador-detail',
  templateUrl: './administrador-detail.component.html',
  styleUrls: ['./administrador-detail.component.css']
})
export class AdministradorDetailComponent implements OnInit 
{
    /**
     * Constructor de AdministradorDetailComponent
    */

    constructor
    (
        private administradorService: AdministradorService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef, 
        private router: Router

    ) {}
    
    /**
     * Atributo de tipo Administrador
    */
        
    administrador: Administrador;
    
    /**
     * Identificador del Administrador
    */
    
    administrador_id: number;
    
    /**
     * Retorna el administrador con el identificador dado
    */
    
    getAdministrador(): void {
        this.administradorService.getAdministrador(this.administrador_id)
            .subscribe(administrador => {
            this.administrador = administrador}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }
    
    /**
     * Elimina el administrador con el identificador dado por parametro
    */
    
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
                            this.toastrservice.success("El administrador fue eliminado exitosamente", "Administrador eliminado");
                            this.router.navigateByUrl('/administradores/list');     
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
     * Metodo para volver a la lista de administradores
    */
    
    volver (): void 
    {
        this.router.navigate(['administradores/list']);
    }
    
    /**
     * Metodo para inicializar el componente
    */

    ngOnInit() {
      this.administrador_id = +this.route.snapshot.paramMap.get('id');
      this.administrador = new Administrador;
      this.getAdministrador();
  }

}
