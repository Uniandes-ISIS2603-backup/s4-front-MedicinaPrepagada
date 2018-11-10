import { Component, OnInit } from '@angular/core';
import {TarjetaCreditoService} from '../tarjeta-credito.service';
import {TarjetaCredito} from '../tarjeta-credito';

@Component({
  selector: 'app-tarjeta-credito-list',
  templateUrl: './tarjeta-credito-list.component.html',
  styleUrls: ['./tarjeta-credito-list.component.css']
})
export class TarjetaCreditoListComponent implements OnInit {
    
    /**
     * constructor del componente
     */
    constructor(private tarjetaCreditoService: TarjetaCreditoService) { }
    
    /**
     * lista de todas las tarjetas de credito
     */
    tarjetasCredito: TarjetaCredito[];
    
    /**
     * obtiene todas las tarjetas de credito
     */
    getTarjetasCredito(){
        this.tarjetaCreditoService.getTarjetasCredito()
            .subscribe(tarjetasCredito => this.tarjetasCredito = tarjetasCredito);
    }

  /**
   * constructor del componente
   */
  ngOnInit() {
      this.getTarjetasCredito();
  }

}
