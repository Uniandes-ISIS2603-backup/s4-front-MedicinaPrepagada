import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import {SedeService} from '../sede.service';
import {EspecialidadService} from '../../especialidad/especialidad.service';

import {Sede} from '../sede';
import {Consultorio} from '../consultorio';
import {Especialidad} from '../../especialidad/especialidad';



@Component({
  selector: 'app-sede-add-consultorio',
  templateUrl: './sede-add-consultorio.component.html',
  styleUrls: ['./sede-add-consultorio.component.css']
})
export class SedeAddConsultorioComponent implements OnInit {

  constructor(private sedeService: SedeService, private especialidadService: EspecialidadService,
                private toastr: ToastrService) { }




       /**
    * The sedes's id
    */
    @Input() sede: Sede;
    
    especialidades: Especialidad [];
    

    /**
    * The consultorio to post
    */
    consultorio: Consultorio;
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
    
    
     getEspecialidades(): void {
         this.especialidadService.getEspecialidades()
            .subscribe(especialidades => {
                this.especialidades = especialidades;
            }, err => {
                this.toastr.error(err, 'Error');
            });
    }
    
    
    
         /**
    * This function posts a consultorio
    * @param consultorioForm The form of the consultorio
    */
    postConsultorio(consultorioForm: NgForm): Consultorio {
        this.consultorio.sede = this.sede;
        this.sedeService.createConsultorio(this.sede.id,this.consultorio)
            .subscribe(() => {
                consultorioForm.resetForm();
                this.create.emit();
                this.toastr.success("The consultorio was successfully created", 'Consultorio added');
            }, err => {
                this.toastr.error(err, 'Error');
            });
        return this.consultorio;
    }
           
    
    cancelCreation() : void{
        this.cancel.emit();
    }
        
  ngOnInit() {
      this.consultorio = new Consultorio();
      this.consultorio.especialidad = new Especialidad();
      this.getEspecialidades();
           
  }

}
