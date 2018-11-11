import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MedicoService} from '../medico.service';
import {Medico} from '../medico';
import {EspecialidadService} from '../../especialidad/especialidad.service'
import { Especialidad } from '../../especialidad/especialidad';

/**
 * Componente que crea un medico
 */
@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.component.html',
  styleUrls: ['./medico-create.component.css']
})
export class MedicoCreateComponent implements OnInit {

/**
    * Constructor for the component
    * @param medicoService The mediSistemas services provider
    */
  constructor(private medicoService: MedicoService,
                private especialidadService: EspecialidadService,
                private toastrService: ToastrService,
        private router: Router) { }

/**
 * El nuevo medico
 */
  medico: Medico;
  
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
    * that the user created a new medico
    */
    @Output() create = new EventEmitter();
    
    
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
     * Crea un nuevo medico
     */
    createMedico(): void {
            var listaEsp = this.especialidades;
        for(let esp of listaEsp){
            if(esp.nombre = document.getElementById('medEspecialidad').values){
                this.atributo = esp;
            }
        }
            var medico_create = {
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
            this.medicoService.createMedico(medico_create)
                .subscribe(medico => {
                    this.router.navigate(['/medicos/' + medico.idMedico]);
                    this.toastrService.success("The medico was successfully created", 'Medico creation');
                }, err => {
                    this.toastrService.error(err, 'Error');
                });
        
    }
    
    /**
    * Informs the parent component that the user no longer wants to create a medico
    */
    cancelCreation() : void{
        this.cancel.emit();
    }

/**
    * This function will initialize the component
    */
  ngOnInit() {
      this.medico = new Medico();
      this.getEspecialidades();
  }

}
