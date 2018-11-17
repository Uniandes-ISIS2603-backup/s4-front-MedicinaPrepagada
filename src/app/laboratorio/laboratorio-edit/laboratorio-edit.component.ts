import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {LaboratorioService} from '../laboratorio.service';
import {ToastrService} from 'ngx-toastr';
import { Laboratorio } from '../laboratorio';
@Component({
  selector: 'app-laboratorio-edit',
  templateUrl: './laboratorio-edit.component.html',
  styleUrls: ['./laboratorio-edit.component.css']
})
export class LaboratorioEditComponent implements OnInit, OnChanges{
 
 constructor(
       
        private laboratorioService: LaboratorioService,
        private toastrService: ToastrService,
    ) {}

    laboratorio: Laboratorio; 
    
    @Output() cancel = new EventEmitter();
    @Output() update = new EventEmitter();
    
    getLaboratorio(): void {
        this.laboratorioService.getLaboratorio(this.laboratorio.id)
            .subscribe(laboratorio => {
                this.laboratorio = laboratorio;
            });
    }

    updateLaboratorio(): void {
        this.laboratorioService.updateLaboratorio(this.laboratorio)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("Se ha modificado exitosamente", "Editar Laboratorio");
            });
        
    }

    cancelEdition(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.laboratorio = new Laboratorio( ); 
        this.getLaboratorio();  
    }

    ngOnChanges() {
        this.ngOnInit();
    }
}
