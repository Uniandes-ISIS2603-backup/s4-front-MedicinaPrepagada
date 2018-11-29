import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {CitaMedica} from '../../cita-medica/cita-medica';
import {PacienteService} from '../../paciente/paciente.service'
import { Paciente } from '../../paciente/paciente';
import {HorarioAtencionService} from '../../horario-atencion/horarioAtencion.service'
import { HorarioAtencion } from '../../horario-atencion/horarioAtencion';

@Component({
  selector: 'app-paciente-cita-medica-create',
  templateUrl: './paciente-cita-medica-create.component.html',
  styleUrls: ['./paciente-cita-medica-create.component.css']
})
export class PacienteCitaMedicaCreateComponent implements OnInit {

    constructor(private pacienteServive: PacienteService,
                 private pacienteService: PacienteService,
                private horarioAtencionService: HorarioAtencionService,
                private toastrService: ToastrService,
        private route: ActivatedRoute,
                private router: Router) { }
                
      /**
 * La nueva cita médica
 */
  citaMedica: CitaMedica;
  
  /**
   * Pacientes disponibles
   */
  pacientes: Paciente[];
  
  /**
   * Horarios de atención disponibles
   */
  horariosAtencion: HorarioAtencion[];
  
  /**
   * atributo paciente seleccionado para el médico a crear
   */
  idPaciente: number;
  
  /**
   * atributo especialidad seleccionado para el médico a crear
   */
  idHorario: number;
    
  
  /**
    * The output which tells the parent component
    * that the user no longer wants to create a cita medica
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * The output which tells the parent component
    * that the user created a new cita medica
    */
    @Output() create = new EventEmitter();
    
    
    /**
     * Obtiene las especialidades disponibles para crear un médico
     */
    getPacientes(): void {
        this.pacienteService.getPacientes()
            .subscribe(pacientes => {
                this.pacientes = pacientes;
                console.log(this.pacientes);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        
    }
    
    /**
     * Obtiene las especialidades disponibles para crear un médico
     */
    getHorariosAtencion(): void {
        this.horarioAtencionService.getHorariosAtencion()
            .subscribe(horariosAtencion => {
                this.horariosAtencion = horariosAtencion;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
    
    /**
     * Crea una nueva cita médica
     */
    createCitaMedica(): void {
        this.pacienteServive.createCitaMedicaPacinte(this.idPaciente, this.idHorario, this.citaMedica)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("La cita medica fue creado", "Creacion Cita");      
        }, err =>{
            this.toastrService.error(err, "Error");
        }
        );
    }
    
    

  /**
    * This function will initialize the component
    */
  ngOnInit() {
      this.idPaciente = +this.route.snapshot.paramMap.get('id');
      this.citaMedica = new CitaMedica();
      this.pacientes = [];
      this.horariosAtencion = [];
      this.getPacientes();
      this.getHorariosAtencion();
  }

}
