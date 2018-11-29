import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import {EspecialidadService} from '../../especialidad/especialidad.service'
import { Especialidad } from '../../especialidad/especialidad';
@Component({
  selector: 'app-especialidad-edit',
  templateUrl: './especialidad-edit.component.html',
  styleUrls: ['./especialidad-edit.component.css']
})
export class EspecialidadEditComponent implements OnInit {
/**
    * Constructor for the component
    * @param sedeService The sedes' services provider
    * @param toastr The toastr to show messages to the user
    */
    
  constructor(private especialidadService: EspecialidadService,
                private toastrService: ToastrService,
                private router: Router,
        private route: ActivatedRoute) { }
  
       /**
    * The medico wich will be updated
    */
     especialidad: Especialidad;
     
     /**
      * the id of the medico 
      */
     nombre: string;

     /**
    * The output which tells the parent component
    * that the user no longer wants to create a medico
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * The output which tells the parent component
    * that the user updated a new medico
    */
    @Output() update = new EventEmitter();
    
       /**
    * Retrieves the information of the medico which will be updated
    */
    getEspecialidad(): void {
        this.especialidadService.getEspecialidad(this.nombre).subscribe(especialidad => {           
            this.especialidad = especialidad;
        });
    }
    
    /**
    * Updates the information of an specialty
    */
    editEspecialidad(): void {
        var paths = window.location.pathname.split('/');
        var name = paths[2];
        console.log(name);
        this.especialidadService.updateEspecialidad(this.especialidad, name)
            .subscribe(() => {
                this.router.navigate(['/especialidades/' + this.especialidad.nombre]);
                this.toastrService.success("La especialidad fue actualizada exitosamente", "Especialidad edition");
            });
    }
    
     /**
    * Cancela la edicion e informa al usuario
    */
    cancelEdition(): void {
        this.toastrService.warning('La especialidad no fue editada', 'Especialidad edition');
        this.router.navigate(['/especialidades/' + + this.especialidad.nombre]);    }
    
  ngOnInit() {
      this.nombre = this.route.snapshot.paramMap.get('nombre');
      console.log(this.nombre);
      this.getEspecialidad();
  }

}
