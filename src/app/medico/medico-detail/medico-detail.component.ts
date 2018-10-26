import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {Medico} from '../medico';
import {ToastrService} from 'ngx-toastr';

import {MedicoService} from '../medico.service';

@Component({
  selector: 'app-medico-detail',
  templateUrl: './medico-detail.component.html',
  styleUrls: ['./medico-detail.component.css']
})
export class MedicoDetailComponent implements OnInit {

  constructor(
        private medicoService: MedicoService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService
        ) {}
        
    medico: Medico;
    
    idMed: number;
    
    getMedico(): void {
        this.medicoService.getMedico(this.idMed)
            .subscribe(medico => {
            this.medico = medico}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }

  ngOnInit() {
      this.idMed = +this.route.snapshot.paramMap.get('id');
      this.medico = new Medico;
      this.getMedico();
  }

}
