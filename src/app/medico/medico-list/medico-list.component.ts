import { Component, OnInit } from '@angular/core';

import {Medico} from './medico.model';

@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styleUrls: ['./medico-list.component.css']
})
export class MedicoListComponent implements OnInit {
  medicos: Medico[];
  constructor() {
    this.medicos = [];
    var medico = new Medico('David', 4234234, 'david@gmail.com', 123456789);
    this.medicos.push(medico);
  }
  
  ngOnInit() {
  }

}
