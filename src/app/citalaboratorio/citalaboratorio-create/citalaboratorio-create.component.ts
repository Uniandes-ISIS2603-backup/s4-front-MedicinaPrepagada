import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {CitaLaboratorioService} from '../citalaboratorio.service';
import {CitaLaboratorio} from '../citalaboratorio';
@Component({
  selector: 'app-citalaboratorio-create',
  templateUrl: './citalaboratorio-create.component.html',
  styleUrls: ['./citalaboratorio-create.component.css']
})
export class CitaLaboratorioCreateComponent implements OnInit {

    constructor(private citaLabService: CitaLaboratorioService,
                private toastr: ToastrService
    ) { }
    
    citaLab: CitaLaboratorio;
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
    createCitaLaboratorio(): void{
        this.citaLabService.createCitaLaboratorio(this.citaLab)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("La cita fue creada", "Creacion Cita");      
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }
    
    cancelCreation() : void{
        this.cancel.emit();
    }

  ngOnInit() {
      this.citaLab = new CitaLaboratorio();
  }

}