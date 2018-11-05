import { Component, OnInit } from '@angular/core';

import {CitaLaboratorioService} from '../citalaboratorio.service';
import {CitaLaboratorio} from '../citalaboratorio';

@Component({
  selector: 'app-citalaboratorio-list',
  templateUrl: './citalaboratorio-list.component.html',
  styleUrls: ['./citalaboratorio-list.component.css']
})
export class CitaLaboratorioListComponent implements OnInit {

  constructor(private citaLabService: CitaLaboratorioService) { }
    
    citas: CitaLaboratorio[];
    cita_id: number;
    selectedCita : CitaLaboratorio;
    getCitasLaboratorio(): void {
        this.citaLabService.getCitasLaboratorio()
            .subscribe(citas => this.citas = citas);
    }

  ngOnInit() {
      this.getCitasLaboratorio();
  }
}
