import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

import {HorarioAtencionService} from '../horarioAtencion.service';
import {MedicoService} from '../../medico/medico.service';
import {SedeService} from '../../sede/sede.service';

import {HorarioAtencion} from '../horarioAtencion';
import {Medico} from '../../medico/medico';
import {Sede} from '../../sede/sede';
import {Consultorio} from '../../sede/consultorio';


@Component({
  selector: 'app-horario-atencion-create',
  templateUrl: './horario-atencion-create.component.html',
  styleUrls: ['./horario-atencion-create.component.css']
})
export class HorarioAtencionCreateComponent implements OnInit {

    constructor(private horarioAtencionService: HorarioAtencionService,
                private medicoService: MedicoService,
        private sedeService: SedeService,
         private toastr: ToastrService,
                         private router: Router
) { }
                
                
    horarioAtencion: HorarioAtencion;
    
        consultorio: Consultorio;

    
    medicos: Medico [];
    
    sedes: Sede[];
    
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
    
       getSedes(): void {
           this.sedeService.getSedes()
            .subscribe(sedes => {
                this.sedes = sedes;
            }, err => {
                this.toastr.error(err, 'Error');
            });
    }
    

    createHorarioAtencion(): HorarioAtencion{
        this.horarioAtencionService.createHorarioAtencion(this.horarioAtencion)
            .subscribe(horarioAtencion => {
                this.horarioAtencion.id = horarioAtencion.id;
                this.router.navigate(['/horariosAtencion/' + horarioAtencion.id]);
                this.toastr.success("El Horario de Atencion fue creado", "Creacion HorarioAtencion");      
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
        return this.horarioAtencion;
    }



    cancelCreation() : void{
        this.cancel.emit();
         this.toastr.warning('El horario no fue creado', 'Horario Atencion creation');

        this.router.navigate(['/horariosAtencion/list']);
    }
  ngOnInit() {
      this.horarioAtencion = new HorarioAtencion();
      this.horarioAtencion.medico = new Medico ();
      this.horarioAtencion.consultorio= new Consultorio();
      this.horarioAtencion.consultorio.sede= new Sede();

      this.getMedicos();
      this.getSedes();
  }

}
