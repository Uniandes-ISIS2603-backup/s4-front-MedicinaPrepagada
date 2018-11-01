import { Component, OnInit } from '@angular/core';
import {HorarioAtencionService} from '../horarioAtencion.service';

import {HorarioAtencion} from '../horarioAtencion';

@Component({
  selector: 'app-horario-atencion-list',
  templateUrl: './horario-atencion-list.component.html',
  styleUrls: ['./horario-atencion-list.component.css']
})
export class HorarioAtencionListComponent implements OnInit 
{

    constructor(private horarioAtencionService: HorarioAtencionService) { }
    
    horariosAtencion: HorarioAtencion [];


        
    getHorariosAtencion(): void 
    {
        this.horarioAtencionService.getHorariosAtencion().subscribe(horariosAtencion => this.horariosAtencion = horariosAtencion);
    }
    
  ngOnInit() {
      this.getHorariosAtencion();
  }

}
