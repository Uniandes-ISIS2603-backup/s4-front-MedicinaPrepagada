import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {EspecialidadService} from '../especialidad.service';
import {Especialidad} from '../especialidad';
@Component({
  selector: 'app-especialidad-create',
  templateUrl: './especialidad-create.component.html',
  styleUrls: ['./especialidad-create.component.css']
})
export class EspecialidadCreateComponent implements OnInit {

  constructor(private especialidadService: EspecialidadService,
                private toastr: ToastrService) { }

  especialidad: Especialidad;
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
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
    
    cancelCreation() : void{
        this.cancel.emit();
    }

  ngOnInit() {
      this.especialidad = new Especialidad();
  }

}
