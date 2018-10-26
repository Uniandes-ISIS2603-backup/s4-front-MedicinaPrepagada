/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {OrdenMedica} from '../ordenMedica';
import {ToastrService} from 'ngx-toastr';

import {OrdenMedicaService} from '../ordenMedica.service';

@Component({
  selector: 'app-ordenMedica-detail',
  templateUrl: './ordenMedica-detail.component.html',
  styleUrls: ['./ordenMedica-detail.component.css']
})
export class OrdenMedicaDetailComponent implements OnInit {

    constructor(
        private ordenMedicaService: OrdenMedicaService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService
        ) {}
        
    ordenMedica: OrdenMedica;
    
    ordenMedica_id: number;
    
    getOrdenMedica(): void 
        {
        this.ordenMedicaService.getOrdenMedica(this.ordenMedica_id)
            .subscribe(ordenMedica => {
            this.ordenMedica = ordenMedica}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }

  ngOnInit() {
      this.ordenMedica_id = +this.route.snapshot.paramMap.get('id');
      this.ordenMedica = new OrdenMedica;
      this.getOrdenMedica();
  }

}
