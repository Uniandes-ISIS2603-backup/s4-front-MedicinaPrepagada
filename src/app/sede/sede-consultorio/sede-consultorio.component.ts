import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {SedeService} from '../sede.service';


import { Consultorio } from '../consultorio';
import { Sede } from '../sede';


@Component({
  selector: 'app-sede-consultorio',
  templateUrl: './sede-consultorio.component.html',
  styleUrls: ['./sede-consultorio.component.css']
})
export class SedeConsultorioComponent implements OnInit {
    
  @Input() sedeConsultorios : Consultorio [];


    sede_id: number;
    
    sede: Sede;
    
    consultorio_id:number;
  constructor(private sedeService: SedeService,
             private route: ActivatedRoute,
             private modalDialogService: ModalDialogService,
             private viewRef: ViewContainerRef,
             private router: Router,
             private toastrservice: ToastrService) { }
    
  /**
     * The function called when a consultorio is posted to update the consultorios
     */
    updateConsultorios(consultorios:Consultorio[]): void {
        this.sedeConsultorios = consultorios;
    }
    
     deleteConsultorio(consultorio_Id): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar Consultorio',
            childComponent: SimpleModalComponent,
            data: {text: '¿Esta seguro de eliminar este consultorio?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.sedeService.deleteConsultorio(this.sede_id, consultorio_Id ).subscribe(sede => {
                            this.toastrservice.success("El consultorio fue borrado  ", "Consultorio Eliminada");
                            //this.router.navigate(['sedes/list']);
                        }, err => {
                            this.toastrservice.error(err, "No fue posible eliminar el consultorio");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }
  
  

  ngOnInit() {
            this.sede_id = +this.route.snapshot.paramMap.get('id');
             this.sede = new Sede;
            this.sede.id= this.sede_id;

  }

}
