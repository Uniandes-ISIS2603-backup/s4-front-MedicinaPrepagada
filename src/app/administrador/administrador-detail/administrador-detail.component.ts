/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {Administrador} from '../administrador';
import {ToastrService} from 'ngx-toastr';

import {AdministradorService} from '../administrador.service';

@Component({
  selector: 'app-administrador-detail',
  templateUrl: './administrador-detail.component.html',
  styleUrls: ['./administrador-detail.component.css']
})
export class AdministradorDetailComponent implements OnInit {

    constructor(
        private administradorService: AdministradorService,
        private route: ActivatedRoute,
        private toastrservice: ToastrService
        ) {}
        
    administrador: Administrador;
    
    administrador_id: number;
    
    getAdministrador(): void {
        this.administradorService.getAdministrador(this.administrador_id)
            .subscribe(administrador => {
            this.administrador = administrador}, err => {
                this.toastrservice.error(err, "error");
            }
            
        );
    }

  ngOnInit() {
      this.administrador_id = +this.route.snapshot.paramMap.get('id');
      this.administrador = new Administrador;
      this.getAdministrador();
  }

}
