import { Component, OnInit } from '@angular/core';
import {TarjetaCreditoService} from '../tarjeta-credito.service';
import {TarjetaCredito} from '../tarjeta-credito';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router/';

@Component({
  selector: 'app-tarjeta-credito-detail',
  templateUrl: './tarjeta-credito-detail.component.html',
  styleUrls: ['./tarjeta-credito-detail.component.css']
})
export class TarjetaCreditoDetailComponent implements OnInit {

    /**
     * construcotor del componente
     */
    constructor(private tarjetaCreditoService: TarjetaCreditoService,
        private toastr: ToastrService,
        private route: ActivatedRoute,) { }
    
    /**
     * tarjeta
     */
    tarjetaCredito: TarjetaCredito;
    
    /**
     * id de la tarjeta
     */
    id: number;
    
    /**
     * obtiene la tarjeta
     */
    getTarjetaCredito(){
        return this.tarjetaCreditoService.getTarjetaCredito(this.id)
            .subscribe(tarjetaCredito => {this.tarjetaCredito = tarjetaCredito},
            err => {this.toastr.error(err,"Error");});
    }

  /**
   * constructor del componente
   */
  ngOnInit() {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.tarjetaCredito = new TarjetaCredito;
      this.getTarjetaCredito();
  }

}
