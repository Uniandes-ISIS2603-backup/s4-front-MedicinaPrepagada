import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


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
                private toastr: ToastrService,
                private router: Router,
                private route: ActivatedRoute) { }




       /**
    * The sedes's id
    */
     sede: Sede;
    
    sede_id:number;
    
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
    
    getSede (): void {
        
        this.sedeService.getSedeDetail(this.sede_id).subscribe(sede =>
        {
            this.sede=sede
        })
    }
    
    
         /**
    * This function posts a consultorio
    * @param consultorioForm The form of the consultorio
    */
    postConsultorio(consultorioForm: NgForm): Consultorio {
        this.consultorio.sede = this.sede;
        this.sedeService.createConsultorio(this.sede_id,this.consultorio)
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
      this.sede_id = +this.route.snapshot.paramMap.get('id');
      this.sede = new Sede();
      
      this.sede.id = this.sede_id;
      this.getSede()
           
  }

}
