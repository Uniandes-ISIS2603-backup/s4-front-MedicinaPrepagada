import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {MedicoService} from '../medico.service';
import {Medico} from '../medico';
@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.component.html',
  styleUrls: ['./medico-create.component.css']
})
export class MedicoCreateComponent implements OnInit {

  constructor(private medicoService: MedicoService,
                private toastr: ToastrService) { }

  medico: Medico;
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
    createMedico(): void{
        this.medicoService.createMedico(this.medico)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("El medico fue creado", "Creacion Medico");      
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }
    
    cancelCreation() : void{
        this.cancel.emit();
    }

  ngOnInit() {
      this.medico = new Medico();
  }

}
