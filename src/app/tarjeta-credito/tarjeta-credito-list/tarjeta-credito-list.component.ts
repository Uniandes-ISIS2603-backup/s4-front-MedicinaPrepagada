import { Component, OnInit } from '@angular/core';
import {TarjetaCreditoService} from '../tarjeta-credito.service';
import {TarjetaCredito} from '../tarjeta-credito';

@Component({
  selector: 'app-tarjeta-credito-list',
  templateUrl: './tarjeta-credito-list.component.html',
  styleUrls: ['./tarjeta-credito-list.component.css']
})
export class TarjetaCreditoListComponent implements OnInit {

    constructor(private tarjetaCreditoService: TarjetaCreditoService) { }
    
    tarjetasCredito: TarjetaCredito[];
    
    getTarjetasCredito(){
        this.tarjetaCreditoService.getTarjetasCredito()
            .subscribe(tarjetasCredito => this.tarjetasCredito = tarjetasCredito);
    }

  ngOnInit() {
      this.getTarjetasCredito();
  }

}
