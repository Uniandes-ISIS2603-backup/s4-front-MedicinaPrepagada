import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import {ToastrService} from 'ngx-toastr';import {HorarioAtencionService} from '../horarioAtencion.service';


import {HorarioAtencion} from '../horarioAtencion';

@Component({
  selector: 'app-horario-atencion-list',
  templateUrl: './horario-atencion-list.component.html',
  styleUrls: ['./horario-atencion-list.component.css']
})
export class HorarioAtencionListComponent implements OnInit 
{

    constructor(private horarioAtencionService: HorarioAtencionService,
                 private modalDialogService: ModalDialogService,
                  private viewRef: ViewContainerRef,
                  private router: Router,

                  private toastrservice: ToastrService
) { }
    
    horariosAtencion: HorarioAtencion [];


        
    getHorariosAtencion(): void 
    {
        this.horarioAtencionService.getHorariosAtencion().subscribe(horariosAtencion => this.horariosAtencion = horariosAtencion);
    }
    
    
     deleteHorarioAtencion(horarioAtencion_Id): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar Horario Atencion',
            childComponent: SimpleModalComponent,
            data: {text: '¿Esta seguro de eliminar este horario de atencion?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.horarioAtencionService.deleteHorarioAtencion(horarioAtencion_Id).subscribe(horarioAtencion => {
                            this.toastrservice.success("El horario de atencion fue borrado  ", "Horario Eliminada");
                            this.router.navigate(['horariosAtencion/list']);
                        }, err => {
                            this.toastrservice.error(err, "No fue posible eliminar el horario de atencion");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }
  ngOnInit() {
      this.getHorariosAtencion();
  }

}
