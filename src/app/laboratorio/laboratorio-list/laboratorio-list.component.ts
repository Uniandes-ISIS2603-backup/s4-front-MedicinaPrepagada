import { Component, OnInit } from '@angular/core';

import {LaboratorioService} from '../laboratorio.service';
import {Laboratorio} from '../laboratorio';


@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio-list.component.html',
  styleUrls: ['./laboratorio-list.component.css']
})
export class LaboratorioListComponent implements OnInit {

  constructor(private laboratorioService: LaboratorioService) { }
    
    laboratorios: Laboratorio[];
    getLaboratorios(): void {
         this.laboratorioService.getLaboratorios().subscribe(laboratorios => this.laboratorios = laboratorios);
    }
 

  ngOnInit() {
      this.getLaboratorios();
  }
}
