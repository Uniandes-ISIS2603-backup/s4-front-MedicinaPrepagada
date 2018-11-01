import { Component, OnInit } from '@angular/core';

import {Especialidad} from '../especialidad';
import {EspecialidadService} from '../especialidad.service';

@Component({
  selector: 'app-especialidad-list',
  templateUrl: './especialidad-list.component.html',
  styleUrls: ['./especialidad-list.component.css']
})
export class EspecialidadListComponent implements OnInit {

  constructor(private especialidadService: EspecialidadService) { }
    
    especialidades: Especialidad[];
    
    getEspecialidades(): void {
        this.especialidadService.getEspecialidades()
            .subscribe(especialidades => this.especialidades = especialidades);
    }

  ngOnInit() {
      this.getEspecialidades();
  }

}
