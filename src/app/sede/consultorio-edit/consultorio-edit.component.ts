import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {SedeService} from '../sede.service';
import {EspecialidadService} from '../../especialidad/especialidad.service';

import {ConsultorioDetail} from '../consultorio-detail';
import {ToastrService} from 'ngx-toastr';
import {Especialidad} from '../../especialidad/especialidad';



@Component({
  selector: 'app-consultorio-edit',
  templateUrl: './consultorio-edit.component.html',
  styleUrls: ['./consultorio-edit.component.css']
})
export class ConsultorioEditComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authorService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
  constructor( private sedeService: SedeService,
                private especialidadService: EspecialidadService,
                private router: Router,    
                private route: ActivatedRoute,
                private toastrService: ToastrService,) { }

        sede_id: number;
        consultorio_id:number;
        
        especialidades: Especialidad [];

            /**
    * The consultorio id as received from the parent component
    */
     consultorio: ConsultorioDetail;

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



        getConsultorioDetail(): void {
        this.sedeService.getConsultorioDetail(this.sede_id, this.consultorio_id)
            .subscribe(consultorioDetail => {
                this.consultorio = consultorioDetail}, err => {
                this.toastrService.error(err, "error");
                }          
             );
             
        }
        
         getEspecialidades(): void {
         this.especialidadService.getEspecialidades()
            .subscribe(especialidades => {
                this.especialidades = especialidades;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
        /**
    * Updates the information of the author
    */
    editConsultorio(): void {
        this.sedeService.updateConsultorio(this.consultorio.sede.id, this.consultorio)
            .subscribe(() => {
                this.router.navigate(['/sedes/' + this.sede_id]);
                this.toastrService.success("The consultorio's information was updated", "Consultorio edition");
            });
        this.update.emit();
    }

      /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
        this.toastrService.warning('El consultorio no fue editada', 'Consultorio edition');
        this.router.navigate(['/sedes/' + + this.sede_id]); 
    }
  ngOnInit() {
            this.sede_id = +this.route.snapshot.paramMap.get('id');
            
         this.consultorio_id = +this.route.snapshot.paramMap.get('idConsultorio');
      this.consultorio = new ConsultorioDetail();
      this.consultorio.especialidad = new Especialidad();
      this.getEspecialidades();
      this.getConsultorioDetail();
  }

}
