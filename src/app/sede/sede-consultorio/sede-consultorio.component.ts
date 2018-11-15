import { Component, OnInit, Input, } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';


import { Consultorio } from '../consultorio';


@Component({
  selector: 'app-sede-consultorio',
  templateUrl: './sede-consultorio.component.html',
  styleUrls: ['./sede-consultorio.component.css']
})
export class SedeConsultorioComponent implements OnInit {
    
  @Input() sedeConsultorios : Consultorio [];


    sede_id: number;

  constructor(private route: ActivatedRoute) { }
    
  /**
     * The function called when a consultorio is posted to update the consultorios
     */
    updateConsultorios(consultorios:Consultorio[]): void {
        this.sedeConsultorios = consultorios;
    }
  
  

  ngOnInit() {
            this.sede_id = +this.route.snapshot.paramMap.get('id');

  }

}
