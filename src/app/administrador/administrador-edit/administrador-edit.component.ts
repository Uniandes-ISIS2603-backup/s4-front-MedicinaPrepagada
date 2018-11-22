/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {AdministradorService} from '../administrador.service';
import {ToastrService} from 'ngx-toastr';
import { Administrador } from '../administrador';
import {ActivatedRoute} from '@angular/router/';

@Component({
    selector: 'app-administrador-edit',
    templateUrl: './administrador-edit.component.html',
    styleUrls: ['./administrador-edit.component.css']
})

export class AdministradorEditComponent implements OnInit, OnChanges 
{
    constructor(
       
        private admiService: AdministradorService,
        private toastrService: ToastrService,
        private route: ActivatedRoute
    ) {}

    @Input() admi_id;
    admi: Administrador; 
    @Output() cancel = new EventEmitter();
    @Output() update = new EventEmitter();
    
    getAdministrador(): void {
        this.admiService.getAdministrador(this.admi_id)
            .subscribe(admi => {
                this.admi = admi;
            });
    }

    editAdministrador(): void 
    {
        var admi_edit =
        {
          id: this.admi.id,
          login: this.admi.login,
          contrasena: this.admi.contrasena,
          tipoUsuario: this.admi.tipoUsuario
        }
        console.log(admi_edit);
        this.admiService.updateAdministrador(admi_edit)
            .subscribe(() => {
                this.toastrService.success("Se ha modificado exitosamente", "Administrador modificado");
      }, err =>{
          this.toastrService.error(err, "Error");
      });
  }

    cancelEdition(): void 
    {
        this.cancel.emit();
    }

    ngOnInit() 
    {
        this.admi_id = + this.route.snapshot.paramMap.get('id');

        this.getAdministrador();
                this.admi = new Administrador;
    }

    ngOnChanges() {
        this.ngOnInit();
    }

}
