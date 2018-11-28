/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {AdministradorService} from '../administrador.service';
import {ToastrService} from 'ngx-toastr';
import { Administrador } from '../administrador';
import {ActivatedRoute, Router} from '@angular/router/';

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
        private route: ActivatedRoute,
        private router: Router   
    ) {}

    @Input() admi_id;
    administrador: Administrador; 
    @Output() cancel = new EventEmitter();
    @Output() update = new EventEmitter();
    
    getAdministrador(): void {
        this.admiService.getAdministrador(this.admi_id)
            .subscribe(admi => {
                this.administrador = admi;
            }, err =>  {this.toastrService.error(err, "Error"); })
    }

    editAdministrador(): void 
    {
        var admi_edit =
        {
          login: this.administrador.login,
          contrasena: this.administrador.contrasena,
          tipoUsuario: this.administrador.tipoUsuario
        }
        console.log(admi_edit);
        this.admiService.updateAdministrador(admi_edit, this.admi_id)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("Se ha modificado exitosamente", "Administrador modificado");
                this.router.navigate(['/administradores/' + this.admi_id]);
      }, err =>{
          this.toastrService.error(err, "Error");
      });
  }

    cancelEdition(): void 
    {
        this.toastrService.warning('El administrador no fue editado', 'Editar Administrador');
        this.router.navigate(['/administradores/' + this.admi_id]);
        this.cancel.emit();
    }

    ngOnInit() 
    {
        this.admi_id = + this.route.snapshot.paramMap.get('id');
        console.log(this.admi_id);
        this.administrador = new Administrador( ); 
        this.getAdministrador();
    }

    ngOnChanges() {
        this.ngOnInit();
    }

}
