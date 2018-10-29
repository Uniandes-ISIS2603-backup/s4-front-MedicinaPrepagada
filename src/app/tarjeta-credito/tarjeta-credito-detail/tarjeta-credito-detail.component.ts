import { Component, OnInit } from '@angular/core';
import {TarjetaCreditoService} from '../tarjeta-credito.service';
import {TarjetaCredito} from '../tarjeta-credito';

@Component({
  selector: 'app-tarjeta-credito-detail',
  templateUrl: './tarjeta-credito-detail.component.html',
  styleUrls: ['./tarjeta-credito-detail.component.css']
})
export class TarjetaCreditoDetailComponent implements OnInit {

    constructor(private tarjetaCreditoService: TarjetaCreditoService) { }
    
    tarjetaCredito: TarjetaCredito;
    
    id: number;
    
    getTarjetaCredito(){
        return this.tarjetaCreditoService.getTarjetaCredito(this.id)
            .subscribe(tarjetaCredito => this.tarjetaCredito = tarjetaCredito)
    }

  ngOnInit() {
  }

}
