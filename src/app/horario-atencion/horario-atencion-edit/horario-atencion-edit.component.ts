import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {HorarioAtencionService} from '../horarioAtencion.service';
import {MedicoService} from '../../medico/medico.service';
import {SedeService} from '../../sede/sede.service';

import {HorarioAtencion} from '../horarioAtencion';
import {Medico} from '../../medico/medico';
import {Sede} from '../../sede/sede';
import {Consultorio} from '../../sede/consultorio';



@Component({
  selector: 'app-horario-atencion-edit',
  templateUrl: './horario-atencion-edit.component.html',
  styleUrls: ['./horario-atencion-edit.component.css']
})
export class HorarioAtencionEditComponent implements OnInit {

  constructor(private horarioAtencionService: HorarioAtencionService,
                private medicoService: MedicoService,
                private sedeService: SedeService,
                private toastr: ToastrService,
                private router: Router,
                private route: ActivatedRoute) { }

    medicos: Medico [];
    
    sedes: Sede[];

    horarioAtencion_id: number;
        horarioAtencion: HorarioAtencion;
    
        consultorio: Consultorio;
        

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an consultorio
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new consultorio
    */
    @Output() update = new EventEmitter();
                
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
    
           /**
    * Retrieves the information of the sede which will be updated
    */
    getHorarioAtencion(): void {
        this.horarioAtencionService.getHorarioAtencion(this.horarioAtencion_id).subscribe(horarioAtencion => {           
            this.horarioAtencion = horarioAtencion;
        });
    }
    
     /**
    * Updates the information of the author
    */
    editHorarioAtencion(): void {
        this.horarioAtencionService.updateHorarioAtencion(this.horarioAtencion)
            .subscribe(() => {
                this.router.navigate(['/horariosAtencion/' + this.horarioAtencion_id]);
                this.toastr.success("The horario's atencion information was updated", "Horario Atencion edition");
            });
        this.update.emit();
    }

     /**
    * Cancela la edicion e informa al usuario
    */
    cancelEdition(): void {
        this.toastr.warning('El horario no fue editada', 'Horario Atencion edition');
        this.router.navigate(['/horariosAtencion/' + + this.horarioAtencion_id]);    }
    
    
  ngOnInit() {
      this.horarioAtencion_id = +this.route.snapshot.paramMap.get('id');
      
      this.horarioAtencion = new HorarioAtencion();
      this.horarioAtencion.medico = new Medico ();
      this.horarioAtencion.consultorio= new Consultorio();
      this.horarioAtencion.consultorio.sede= new Sede();
      
      this.horarioAtencion.id = this.horarioAtencion_id;
      this.getHorarioAtencion();
      this.getMedicos();
      this.getSedes();
      
  }

}
