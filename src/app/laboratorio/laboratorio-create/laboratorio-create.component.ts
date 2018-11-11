import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {LaboratorioService} from '../laboratorio.service';
import {Laboratorio} from '../laboratorio';
@Component({
  selector: 'app-laboratorio-create',
  templateUrl: './laboratorio-create.component.html',
  styleUrls: ['./laboratorio-create.component.css']
})
export class LaboratorioCreateComponent implements OnInit {

    constructor(private laboratorioService: LaboratorioService,
                private toastr: ToastrService
    ) { }
    
    laboratorio: Laboratorio;
    
    @Output() cancel = new EventEmitter();
    
    @Output() create = new EventEmitter();
    
    createLaboratorio(): void{
        this.laboratorioService.createLaboratorio(this.laboratorio)
            .subscribe(() => {
                this.create.emit();
                this.toastr.success("El laboratorio fue creado", "Creacion Laboratorio");      
        }, err =>{
            this.toastr.error(err, "Error");
        }
        );
    }
    
    cancelCreation() : void{
        this.cancel.emit();
    }

  ngOnInit() {
      this.laboratorio = new Laboratorio();
  }

}
