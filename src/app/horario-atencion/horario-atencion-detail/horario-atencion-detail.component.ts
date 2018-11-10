import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {HorarioAtencion} from '../horarioAtencion';
import {ToastrService} from 'ngx-toastr';
import {HorarioAtencionService} from '../horarioAtencion.service';

@Component({
  selector: 'app-horario-atencion-detail',
  templateUrl: './horario-atencion-detail.component.html',
  styleUrls: ['./horario-atencion-detail.component.css']
})
export class HorarioAtencionDetailComponent implements OnInit {

constructor(private horarioAtencionService: HorarioAtencionService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService) { }
        
        horarioAtencion: HorarioAtencion;
        
        horarioAtencion_id: number;

        getHorarioAtencion(): void {
        this.horarioAtencionService.getHorarioAtencion(this.horarioAtencion_id)
            .subscribe(horarioAtencion => {
            this.horarioAtencion = horarioAtencion}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }
  ngOnInit() {
      this.horarioAtencion_id = +this.route.snapshot.paramMap.get('id');
      this.horarioAtencion = new HorarioAtencion;
      this.getHorarioAtencion();
  }


}
