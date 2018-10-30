import { Component, OnInit } from '@angular/core';
import {LaboratorioService} from '../laboratorio.service';
import {Laboratorio} from '../laboratorio';
import {LaboratorioDetail} from '../laboratorio-detail';

@Component({
  selector: 'app-laboratorio-list',
  templateUrl: './laboratorio-list.component.html',
  styleUrls: ['./laboratorio-list.component.css']
})
export class LaboratorioListComponent implements OnInit {

  constructor(private laboratorioService: LaboratorioService) { }
    
    laboratorios: Laboratorio[];
    laboratorio_id: number;
    selectedLaboratorio : Laboratorio;
    getLaboratorios(): void {
        this.laboratorioService.getLaboratorios()
            .subscribe(laboratorios => this.laboratorios = laboratorios);
    }
    getLaboratorioDetail(): void {
        this.laboratorioService.getLaboratorioDetail(this.laboratorio_id)
            .subscribe(selectedLaboratorio => {
                this.selectedLaboratorio = selectedLaboratorio
            });
     }

  ngOnInit() {
      this.getLaboratorios();
  }
}
