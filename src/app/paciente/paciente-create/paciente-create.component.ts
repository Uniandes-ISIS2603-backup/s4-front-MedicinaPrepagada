import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {PacienteService} from '../paciente.service';
import {Paciente} from '../paciente';
@Component({
  selector: 'app-paciente-create',
  templateUrl: './paciente-create.component.html',
  styleUrls: ['./paciente-create.component.css']
})
export class PacienteCreateComponent implements OnInit {

    /**
     * constructor del componente
     */
    constructor(private pacienteService: PacienteService,
                private toastr: ToastrService
    ) { }
    
    /**
     * el paciente que se va a crear
     */
    paciente: Paciente;
    
    /**
     * el output que le dice al componente que cancele la creacion
     */
    @Output() cancel = new EventEmitter();
    
    /**
   * el output que le dice al componente que el usuario creo el componente
   */
    @Output() create = new EventEmitter();
    
    /**
     * crea un paciente
     */
    createPaciente(): void{
        this.pacienteService.createPaciente(this.paciente)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("El paciente fue creado", "Creacion Paciente");      
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }
    
    /**
     * cancela la creacion del paciente
     */
    cancelCreation() : void{
        this.toastr.warning('El paciente no fue creado', 'Crear paciente');
        this.cancel.emit();
    }
  /**
   * funcion para inicializar el componente
   */
  ngOnInit() {
      this.paciente = new Paciente();
  }

}
