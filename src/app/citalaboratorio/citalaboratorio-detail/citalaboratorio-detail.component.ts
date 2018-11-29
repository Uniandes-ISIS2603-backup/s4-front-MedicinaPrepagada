import {Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router/';
import {CitaLaboratorio} from '../citalaboratorio';
import {ToastrService} from 'ngx-toastr';
import {CitaLaboratorioService} from '../citalaboratorio.service';
import {Laboratorio} from '../../laboratorio/laboratorio';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

@Component({
  selector: 'app-citalaboratorio-detail',
  templateUrl: './citalaboratorio-detail.component.html',
  styleUrls: ['./citalaboratorio-detail.component.css']
})
export class CitaLaboratorioDetailComponent implements OnInit {

   constructor(
        private citaLabService: CitaLaboratorioService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrservice: ToastrService
        ) {}
        
    citaLaboratorio: CitaLaboratorio;
    laboratorio:Laboratorio;
    citaLaboratorio_id: number;
    
    getCitaLaboratorio(): void 
        {
        this.citaLabService.getCitaLaboratorio(this.citaLaboratorio_id)
            .subscribe(citaLaboratorio => {
            this.citaLaboratorio = citaLaboratorio}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }
    deleteCitaLaboratorio(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Borrar una cita laboratorio',
            childComponent: SimpleModalComponent,
            data: {text: 'Está seguro que desea eliminar esta cita laboratorio?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.citaLabService.deleteCitaLaboratorio(this.citaLaboratorio_id).subscribe(citalaboratorio => {
                            this.toastrservice.success("CitaLaboratorio ", "Eliminada exitosamente");
                            this.router.navigate(['citalaboratorio/list']);
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
    getLaboratorioFromCita ():void
    {
        this.citaLabService.getLaboratorioFromCita(this.citaLaboratorio_id)
            .subscribe(laboratorio => {
                this.laboratorio = laboratorio}, err => {
                    this.toastrservice.error(err, "error");
            }
            
        );
    }
    

  ngOnInit() {
      this.citaLaboratorio_id = +this.route.snapshot.paramMap.get('id');
      this.citaLaboratorio = new CitaLaboratorio;
      this.laboratorio = new Laboratorio;
      this.getLaboratorioFromCita();
      this.getCitaLaboratorio();
  }

}