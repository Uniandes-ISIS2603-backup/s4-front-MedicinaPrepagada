/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
import { Component, OnInit, ViewContainerRef } from '@angular/core';
/*import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';*/
import {ToastrService} from 'ngx-toastr';
import {AdministradorService} from '../administrador.service';
import {Administrador} from '../administrador';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})

export class AdministradorListComponent implements OnInit 
{
    constructor(
    private administradorService: AdministradorService,
    /*private modalDialogService: ModalDialogService,*/
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {}
    
    administradores: Administrador[];
    
    admi_id: number;
    
    getAdministradores(): void 
    {
        this.administradorService.getAdministradores()
            .subscribe(administradores => this.administradores = administradores);
    }
    
    /*deleteAdministrador(admi_id): void {
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
                            this.toastrService.error("El administrador fue eliminado exitosamente", "Administrador eliminado");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }*/
    
  ngOnInit() 
  {
      this.getAdministradores();
  }
}

