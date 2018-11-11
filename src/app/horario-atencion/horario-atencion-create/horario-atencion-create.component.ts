import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {HorarioAtencionService} from '../horarioAtencion.service';
import {MedicoService} from '../../medico/medico.service';

import {HorarioAtencion} from '../horarioAtencion';
import {Medico} from '../../medico/medico';


@Component({
  selector: 'app-horario-atencion-create',
  templateUrl: './horario-atencion-create.component.html',
  styleUrls: ['./horario-atencion-create.component.css']
})
export class HorarioAtencionCreateComponent implements OnInit {

    constructor(private horarioAtencionService: HorarioAtencionService,
                private medicoService: MedicoService, private toastr: ToastrService) { }
                
                
    horarioAtencion: HorarioAtencion;
    
    medicos: Medico [];
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
    
    getMedicos(): void {
        this.medicoService.getMedicos()
            .subscribe(medicos => {
                this.medicos = medicos;
            }, err => {
                this.toastr.error(err, 'Error');
            });
    }
    

    createHorarioAtencion(): void{
        this.horarioAtencionService.createHorarioAtencion(this.horarioAtencion)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("El Horario de Atencion fue creado", "Creacion HorarioAtencion");      
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }



    cancelCreation() : void{
        this.cancel.emit();
    }
  ngOnInit() {
      this.horarioAtencion = new HorarioAtencion();
      this.horarioAtencion.medico = new Medico ();
      this.getMedicos()
  }

}
