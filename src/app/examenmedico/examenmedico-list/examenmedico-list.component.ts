import { Component, OnInit } from '@angular/core';
import {ExamenMedicoService} from '../examenmedico.service';
import {ExamenMedicoDetail} from '../examenmedico-detail';

import {ExamenMedico} from '../examenmedico';

@Component({
  selector: 'app-examenmedico',
  templateUrl: './examenmedico-list.component.html',
  styleUrls: ['./examenmedico-list.component.css']
})
export class ExamenMedicoListComponent implements OnInit {

    constructor(private examenService: ExamenMedicoService) { }
    
    examenes: ExamenMedico[];
    examen_id: number;
    selectedExamen : ExamenMedico;
        
    getExamenesMedicos(): void {
        this.examenService.getExamenesMedicos()
            .subscribe(examenes => this.examenes = examenes);
    }
    
    onSelected(examen_id: number):void {
        this.examen_id = examen_id;
        this.selectedExamen = new ExamenMedicoDetail();
        this.getExamenMedicoDetail();     
    }
    
    getExamenMedicoDetail(): void {
        this.examenService.getExamenMedicoDetail(this.examen_id)
            .subscribe(selectedExamen => {
                this.selectedExamen = selectedExamen
            });
     }


  ngOnInit() {
      this.getExamenesMedicos();
  }

}


