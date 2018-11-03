import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {CitaLaboratorio} from '../citalaboratorio';
import {ToastrService} from 'ngx-toastr';
import {CitaLaboratorioService} from '../citalaboratorio.service';

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

  ngOnInit() {
      this.citaLaboratorio_id = +this.route.snapshot.paramMap.get('id');
      this.citaLaboratorio = new CitaLaboratorio;
      this.getCitaLaboratorio();
  }

}
