import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {Paciente} from '../paciente';
import {ToastrService} from 'ngx-toastr';

import {PacienteService} from '../paciente.service';

@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: ['./paciente-detail.component.css']
})
export class PacienteDetailComponent implements OnInit {

    constructor(
        private pacienteService: PacienteService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService
        ) {}
        
    paciente: Paciente;
    
    paciente_id: number;
    
    getPaciente(): void {
        this.pacienteService.getPaciente(this.paciente_id)
            .subscribe(paciente => {
            this.paciente = paciente}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }

  ngOnInit() {
      this.paciente_id = +this.route.snapshot.paramMap.get('id');
      this.paciente = new Paciente;
      this.getPaciente();
  }

}
