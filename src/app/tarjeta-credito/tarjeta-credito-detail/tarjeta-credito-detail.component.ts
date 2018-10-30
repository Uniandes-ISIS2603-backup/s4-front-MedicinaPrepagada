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

    constructor(private tarjetaCreditoService: TarjetaCreditoService,
        private toastr: ToastrService,
        private route: ActivatedRoute,) { }
    
    tarjetaCredito: TarjetaCredito;
    
    id: number;
    
    getTarjetaCredito(){
        return this.tarjetaCreditoService.getTarjetaCredito(this.id)
            .subscribe(tarjetaCredito => {this.tarjetaCredito = tarjetaCredito},
            err => {this.toastr.error(err,"Error");});
    }

  ngOnInit() {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.tarjetaCredito = new TarjetaCredito;
      this.getTarjetaCredito();
  }

}
