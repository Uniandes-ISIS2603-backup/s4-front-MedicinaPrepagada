import { Component, OnInit } from '@angular/core';



/**
 * Componente que crea una cita medica
 */
@Component({
  selector: 'app-cita-medica-create',
  templateUrl: './cita-medica-create.component.html',
  styleUrls: ['./cita-medica-create.component.css']
})
export class CitaMedicaCreateComponent implements OnInit {

/**
    * Constructor for the component
    * @param citaMedicaService The mediSistemas services provider
    */
  constructor() { }

/**
    * This function will initialize the component
    */
  ngOnInit() {
  }

}
