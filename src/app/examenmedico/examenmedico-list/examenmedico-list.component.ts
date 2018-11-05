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
    
    /**
    * The list of farmacias which belong to the BookStore
    */
    examenes: ExamenMedico[];

    /**
    * Shows or hides the examenmedico-create-component
    */
    showCreate: boolean;
    
    /**
    * The id of the farmacia that the user wants to view
    */
    examen_id: number;
    
    /**
     * the farmacia that the user views.
     */
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
  
  /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedExamen) {
            this.selectedExamen = undefined;
            this.examen_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }

}


