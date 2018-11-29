import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';


import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';


import {SedeService} from '../sede.service';


import {Consultorio} from '../consultorio';
import {ConsultorioDetail} from '../consultorio-detail';


@Component({
  selector: 'app-consultorio-detail',
  templateUrl: './consultorio-detail.component.html',
  styleUrls: ['./consultorio-detail.component.css']
})
export class ConsultorioDetailComponent implements OnInit {

  constructor(private sedeService: SedeService,
                private route: ActivatedRoute,
                    private router: Router,
                private toastrservice: ToastrService) { }

    consultorioDetail: Consultorio;
    
    consultorio_id: number;
  
    sede_id: number;
    
  
    getConsultorioDetail(): void {
        this.sedeService.getConsultorioDetail(this.sede_id, this.consultorio_id)
            .subscribe(consultorioDetail => {
            this.consultorioDetail = consultorioDetail}, err => {
                this.toastrservice.error(err, "error");
                }          
             );
             
        }
      
          
    

        /**
         * falta modificar para que retorne al detail
         */
         volver (): void {
             this.router.navigate(['sedes/' + this.sede_id]);
    }
    
            

  ngOnInit() {
      this.sede_id = +this.route.snapshot.paramMap.get('id');
      this.consultorio_id = +this.route.snapshot.paramMap.get('idConsultorio');
      this.consultorioDetail = new ConsultorioDetail();
      this.getConsultorioDetail();
      
      
  }

}
