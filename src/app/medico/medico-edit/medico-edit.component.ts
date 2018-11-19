import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import { MedicoService } from '../medico.service';
import { Medico } from '../medico';
import {EspecialidadService} from '../../especialidad/especialidad.service'
import { Especialidad } from '../../especialidad/especialidad';


@Component({
  selector: 'app-medico-edit',
  templateUrl: './medico-edit.component.html',
  styleUrls: ['./medico-edit.component.css']
})
export class MedicoEditComponent implements OnInit {

  /**
    * Constructor for the component
    * @param sedeService The sedes' services provider
    * @param toastr The toastr to show messages to the user
    */
    
  constructor(private medicoService: MedicoService,
                private especialidadService: EspecialidadService,
                private toastrService: ToastrService,
                private router: Router,
        private route: ActivatedRoute) { }
                
         /**
    * The medico wich will be updated
    */
     medico: Medico;
     
     /**
      * the id of the medico 
      */
     medico_id: number;

     /**
   * Especialidades disponibles
   */
     especialidades: Especialidad[];
  
    /**
     * atributo especialidad seleccionado para el médico a crear
     */
    atributo: Especialidad;
    
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
    getMedico(): void {
        this.medicoService.getMedico(this.medico_id).subscribe(medico => {           
            this.medico = medico;
        });
    }
      
    /**
    * Updates the information of the medico
    */
    updateMedico(): void {
        var listaEsp = this.especialidades;
        for(let esp of listaEsp){
            if(esp.nombre = (document.getElementById('medEspecialidad') as HTMLInputElement).value){
                this.atributo = esp;
            }
        }
        
            var medico_update = {
                idMedico: this.medico.idMedico,
                login: this.medico.login,
                contrasena: this.medico.contrasena,
                tipoUsuario: this.medico.tipoUsuario,
                documentoIdentidad: this.medico.documentoIdentidad,
                telefono: this.medico.telefono,
                documentoMedico: this.medico.documentoMedico,
                nombre: this.medico.nombre,
                correo: this.medico.correo,
                firma: this.medico.firma,
                descripcion: this.medico.descripcion,
                especialidad: this.atributo
            };    
            this.medicoService.updateMedico(medico_update)
                .subscribe(medico => {
                    this.router.navigate(['/medicos/' + medico.idMedico]);
                    this.toastrService.success("The medico was successfully updated", 'Medico update');
                }, err => {
                    this.toastrService.error(err, 'Error');
                });
    }
    
    /**
     * Obtiene las especialidades disponibles para crear un médico
     */
    getEspecialidades(): void {
        this.especialidadService.getEspecialidades()
            .subscribe(especialidades => {
                this.especialidades = especialidades;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }

     /**
    * Cancela la edicion e informa al usuario
    */
    cancelEdition(): void {
        this.toastrService.warning('El medico no fue editado', 'Medico edition');
        this.router.navigate(['/medicos/' + + this.medico.idMedico]);    }
    
    
  ngOnInit() {
      this.medico_id = +this.route.snapshot.paramMap.get('id');
      console.log(this.medico_id);
      this.getMedico();
      this.getEspecialidades();
      
  }
}
