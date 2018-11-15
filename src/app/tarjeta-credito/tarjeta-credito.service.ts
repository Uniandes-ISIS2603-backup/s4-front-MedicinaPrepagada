import {Injectable} from '@angular/core';
import { Observable , throwError} from 'rxjs';
import {environment} from '../../environments/environment';

import {TarjetaCredito} from './tarjeta-credito';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';

const API_URL = environment.apirURL;
const tarjetasCredito = '/tarjetascredito';

@Injectable()
export class TarjetaCreditoService{
    
    headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    });
    
    /**
     * constructor del componente
     */
    constructor(private http :HttpClient){}
    
    /**
     * obtiene todas las tarjetas de credito
     */
    getTarjetasCredito(): Observable<TarjetaCredito[]>{
        return this.http.get<TarjetaCredito[]>(API_URL + tarjetasCredito).catch(err => this.handleError(err));
    }
    
    /**
     * obtiene la tarjeta de credito con el id dado
     */
    getTarjetaCredito(id: number): Observable<TarjetaCredito>{
        return this.http.get<TarjetaCredito>(API_URL + tarjetasCredito + '/'+id).catch(err => this.handleError(err));
    }
    
    /**
     * elimina la tarjeta de credito con el id dado
     */
    deleteTarjeta(idTarjeta): Observable<Boolean>{
        return this.http.delete<Boolean>(API_URL + tarjetasCredito + '/' + idTarjeta).catch(err => this.handleError(err));
    }
    
    /**
     * maneja lso errores
     */
    handleError(error:any){
        return throwError(error.error.message);
    }
    
}


