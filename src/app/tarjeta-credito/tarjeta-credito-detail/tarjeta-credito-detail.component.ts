import {Component, OnInit, ViewContainerRef } from '@angular/core';
import {TarjetaCreditoService} from '../tarjeta-credito.service';
import {TarjetaCredito} from '../tarjeta-credito';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router/';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

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
        private route: ActivatedRoute,
        private modalDialog: ModalDialogService,
        private viewRef: ViewContainerRef) { }
    
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
     * elimina la tarjeta de credito
     */
    deleteTarjetaCredito(): void{
        this.modalDialog.openDialog(this.viewRef,{
            title: 'Eliminar Tarjeta de Credito',
            childComponent: SimpleModalComponent,
            data:{
                text: 'Esta seguro que desea eliminar la tarjeta de credito'
            },
            actionButtons:[
                {
                    text:'si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.tarjetaCreditoService.deleteTarjeta(this.id)
                            .subscribe(() => {}, err =>{
                                this.toastr.error(err, "Error");
                        });
                        return true;
                    }
                },
                {
                    text: 'Cancelar',
                    onAction: () => true
                }
            ]
        });
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
