import {Injectable} from '@angular/core';
import { Observable , throwError} from 'rxjs';
import {environment} from '../../environments/environment';

import {TarjetaCredito} from './tarjeta-credito';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';

const API_URL = environment.apirURL;
const tarjetasCredito = '/tarjetascredito';

@Injectable()
export class TarjetaCreditoService{
    
    constructor(private http :HttpClient){}
    
    getTarjetasCredito(): Observable<TarjetaCredito[]>{
        return this.http.get<TarjetaCredito[]>(API_URL + tarjetasCredito).catch(err => this.handleError(err));
    }
    
    getTarjetaCredito(id: number): Observable<TarjetaCredito>{
        return this.http.get<TarjetaCredito>(API_URL + tarjetasCredito + id).catch(err => this.handleError(err));
    }
    
    handleError(error:any){
        return throwError(error.error.message);
    }
    
}


