import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
                private toastr: ToastrService
    ) { }
    
    citaLab: CitaLaboratorio;
    
    laboratorios: Laboratorio [];
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
    getLaboratorios (): void {
        
        this.labService.getLaboratorios()
            .subscribe(laboratorios=> {this.laboratorios = laboratorios}
            , err => {
                this.toastr.error(err, 'Error');
            })
    }
    createCitaLaboratorio(): void{
        this.citaLabService.createCitaLaboratorio(this.citaLab)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("La cita fue creada", "Creacion Cita");      
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }
    
    
    cancelCreation() : void{
        this.cancel.emit();
    }

  ngOnInit() {
      this.citaLab = new CitaLaboratorio();
  }

}