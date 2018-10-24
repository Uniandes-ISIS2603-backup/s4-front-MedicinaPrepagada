import { Component, OnInit } from '@angular/core';

import {Medico} from '../medico';
import {MedicoService} from '../medico.service'

@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styleUrls: ['./medico-list.component.css']
})
export class MedicoListComponent implements OnInit {
  constructor(private medicoService: MedicoService) { }
    
    medicos: Medico[];
    
    getMedicos(): void {
        this.medicoService.getMedicos()
            .subscribe(medicos => this.medicos = medicos);
    }

  ngOnInit() {
      this.getMedicos();
  }

}
