import { Component, OnInit, Input, ViewContainerRef  } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LaboratorioService} from '../laboratorio.service';
import {Laboratorio} from '../laboratorio';

import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

@Component({
  selector: 'app-laboratorio-detail',
  templateUrl: './laboratorio-detail.component.html',
  styleUrls: ['./laboratorio-detail.component.css']
})
export class LaboratorioDetailComponent implements OnInit {

  constructor(
        private laboratorioService: LaboratorioService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrservice: ToastrService
        ){//This is added so we can refresh the view when one of the sedes in
        //the "Other sedes" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        }); }
    
    /**
    * The lab's id
    */
    laboratorio_id: number;
    
    laboratorio: Laboratorio;
    
    /**
    * The suscription which helps to know when a new sede
    * needs to be loaded
    */
    navigationSubscription;
    
    lat:number;
     
    lng:number;
   /**
    * The method which retrieves info of a lab
    */
    getLaboratorio(): void 
        {
        this.laboratorioService.getLaboratorio(this.laboratorio_id)
            .subscribe(laboratorio => {
            this.laboratorio = laboratorio}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }
    /**
     * Metodo para borrar un laboratorio
     */
    deleteLaboratorio(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Borrar un laboratorio',
            childComponent: SimpleModalComponent,
            data: {text: 'Está seguro que desea eliminar este laboratorio?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.laboratorioService.deleteLaboratorio(this.laboratorio_id).subscribe(laboratorio => {
                            this.toastrservice.success("Laboratorio ", "Eliminado exitosamente");
                            this.router.navigate(['laboratorios/list']);
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
    * The method which initializes the component
    * We need to initialize the lab so it is never considered as undefined
    */
    ngOnInit() {
        this.laboratorio_id = +this.route.snapshot.paramMap.get('id');
      this.laboratorio = new Laboratorio;
      this.getLaboratorio();
      this.lat = this.laboratorio.latitud;
      this.lng = this.laboratorio.longitud;
    }

}
