import { Component, OnInit } from '@angular/core';
import {ExamenMedicoService} from '../examenmedico.service';
import {ExamenMedico} from '../examenmedico';

@Component({
  selector: 'app-examenmedico',
  templateUrl: './examenmedico-list.component.html',
  styleUrls: ['./examenmedico-list.component.css']
})
export class ExamenMedicoListComponent implements OnInit {

    constructor(private examenService: ExamenMedicoService) { }
    
    examenes: ExamenMedico[];
    
    getExamenesMedicos(): void {
        this.examenService.getExamenesMedicos()
            .subscribe(examenes => this.examenes = examenes);
    }

  ngOnInit() {
      this.getExamenesMedicos();
  }

}


