import { Component, OnInit, Input, } from '@angular/core';
import { Consultorio } from '../consultorio';


@Component({
  selector: 'app-sede-consultorio',
  templateUrl: './sede-consultorio.component.html',
  styleUrls: ['./sede-consultorio.component.css']
})
export class SedeConsultorioComponent implements OnInit {
    
  @Input() sedeConsultorios : Consultorio [];



  constructor() { }
    
  /**
     * The function called when a consultorio is posted to update the consultorios
     */
    updateConsultorios(consultorios:Consultorio[]): void {
        this.sedeConsultorios = consultorios;
    }
  
  

  ngOnInit() {
  }

}
