import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {CitaLaboratorio} from '../citalaboratorio';
import {ToastrService} from 'ngx-toastr';
import {CitaLaboratorioService} from '../citalaboratorio.service';
import {Laboratorio} from '../../laboratorio/laboratorio';

@Component({
  selector: 'app-citalaboratorio-detail',
  templateUrl: './citalaboratorio-detail.component.html',
  styleUrls: ['./citalaboratorio-detail.component.css']
})
export class CitaLaboratorioDetailComponent implements OnInit {

   constructor(
        private citaLabService: CitaLaboratorioService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService
        ) {}
        
    citaLaboratorio: CitaLaboratorio;
    laboratorio:Laboratorio;
    citaLaboratorio_id: number;
    
    getCitaLaboratorio(): void 
        {
        this.citaLabService.getCitaLaboratorio(this.citaLaboratorio_id)
            .subscribe(citaLaboratorio => {
            this.citaLaboratorio = citaLaboratorio}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }
    
    getLaboratorioFromCita ():void
    {
        this.citaLabService.getLaboratorioFromCita(this.citaLaboratorio_id)
            .subscribe(laboratorio => {
                this.laboratorio = laboratorio}, err => {
                    this.toastrservice.error(err, "error");
            }
            
        );
    }
    

  ngOnInit() {
      this.citaLaboratorio_id = +this.route.snapshot.paramMap.get('id');
      this.citaLaboratorio = new CitaLaboratorio;
      this.laboratorio = new Laboratorio;
      this.getLaboratorioFromCita();
      this.getCitaLaboratorio();
  }

}
