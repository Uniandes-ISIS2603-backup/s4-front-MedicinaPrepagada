/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {HistoriaClinica} from '../historiaClinica';
import {ToastrService} from 'ngx-toastr';

import {HistoriaClinicaService} from '../historiaClinica.service';

@Component({
  selector: 'app-historiaClinica-detail',
  templateUrl: './historiaClinica-detail.component.html',
  styleUrls: ['./historiaClinica-detail.component.css']
})
export class HistoriaClinicaDetailComponent implements OnInit {

    constructor(
        private historiaClinicaService: HistoriaClinicaService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService
        ) {}
        
    historiaClinica: HistoriaClinica;
    
    historiaClinica_id: number;
    
    getHistoriaClinica(): void 
        {
        this.historiaClinicaService.getHistoriaClinica(this.historiaClinica_id)
            .subscribe(historiaClinica => {
            this.historiaClinica = historiaClinica}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }

  ngOnInit() {
      this.historiaClinica_id = +this.route.snapshot.paramMap.get('id');
      this.historiaClinica = new HistoriaClinica;
      this.getHistoriaClinica();
  }

}
