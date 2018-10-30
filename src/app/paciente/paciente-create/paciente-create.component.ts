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

    constructor(private pacienteService: PacienteService,
                private toastr: ToastrService
    ) { }
    
    paciente: Paciente;
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
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
    
    cancelCreation() : void{
        this.cancel.emit();
    }

  ngOnInit() {
      this.paciente = new Paciente();
  }

}
