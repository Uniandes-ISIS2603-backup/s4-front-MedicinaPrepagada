import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {CitaLaboratorioService} from '../citalaboratorio.service';
import {CitaLaboratorio} from '../citalaboratorio';
import {Laboratorio} from '../../laboratorio/laboratorio';
import {LaboratorioService} from '../../laboratorio/laboratorio.service';
@Component({
  selector: 'app-citalaboratorio-create',
  templateUrl: './citalaboratorio-create.component.html',
  styleUrls: ['./citalaboratorio-create.component.css']
})
export class CitaLaboratorioCreateComponent implements OnInit {

    constructor(private citaLabService: CitaLaboratorioService,
                private labService: LaboratorioService,
                private toastr: ToastrService, 
                private router: Router
    ) { }
    
    citaLab: CitaLaboratorio;
    
    laboratorios: Laboratorio [];
    
    atributoLab: Laboratorio;
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
    /**
     * Obtiene los laboratorios para crear una cita
     */
    getLaboratorios(): void {
        this.labService.getLaboratorios()
            .subscribe(labs => {
                this.laboratorios = labs;
            }, err => {
                this.toastr.error(err, 'Error');
            });
    }

    createCitaLaboratorio(): void{
        
        var listaLabs = this.laboratorios;
        
        for(let laboratorio of listaLabs){
                if(laboratorio.id = +(document.getElementById('citaLabLaboratorios') as HTMLInputElement).value)
                {
                    this.atributoLab
                }
            }

         var citaLab_create = {
                id: this.citaLab.id,
                fecha: this.citaLab.fecha,
                comentarios: this.citaLab.comentarios,
                recomendaciones: this.citaLab.recomendaciones,
                especialidad: this.citaLab.especialidad,
                laboratorio: this.atributoLab
            };    
            this.citaLabService.createCitaLaboratorio(citaLab_create)
                .subscribe(citaLab => {
                    this.router.navigate(['/citalaboratorio/' + citaLab.id]);
                    this.toastr.success("The cita laboratorio was successfully created", 'Cita Laboratorio creation');
                }, err => {
                    this.toastr.error(err, 'Error');
                });
    }
    
    
     /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an citaLab
    */
    
    cancelCreation() : void{        
        this.toastr.warning('La cita no fue creada', 'CitaLab creation');

        this.router.navigate(['/citalaboratorio/list']);
    }

  ngOnInit() {
       this.citaLab = new CitaLaboratorio();
       this.laboratorios = [];
       this.getLaboratorios();
  }

}