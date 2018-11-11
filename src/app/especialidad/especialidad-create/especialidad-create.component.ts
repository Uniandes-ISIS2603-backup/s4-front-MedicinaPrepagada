import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {EspecialidadService} from '../especialidad.service';
import {Especialidad} from '../especialidad';


/**
 * Componente que crea una especialidad
 */
@Component({
  selector: 'app-especialidad-create',
  templateUrl: './especialidad-create.component.html',
  styleUrls: ['./especialidad-create.component.css']
})
export class EspecialidadCreateComponent implements OnInit {

/**
    * Constructor for the component
    * @param especialidadService The mediSistemas services provider
    */
  constructor(private especialidadService: EspecialidadService,
                private toastr: ToastrService) { }

/**
 * La nueva especialidad
 */
  especialidad: Especialidad;
    
  /**
    * The output which tells the parent component
    * that the user no longer wants to create an especialidad
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * The output which tells the parent component
    * that the user created a new especialidad
    */
    @Output() create = new EventEmitter();
    
    
    /**
     * Crea una nueva especialidad
     */
    createEspecialidad(): void{
        this.especialidadService.createEspecialidad(this.especialidad)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("La especialidad fue creado", "Creacion Especialidad");      
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }
    
    /**
    * Informs the parent component that the user no longer wants to create an especialidad
    */
    cancelCreation() : void{
        this.cancel.emit();
    }

/**
    * This function will initialize the component
    */
  ngOnInit() {
      this.especialidad = new Especialidad();
  }

}
