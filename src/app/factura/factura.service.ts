/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Factura} from './factura';
//import {FacturaDetail} from './factura-detail';
import {HttpClient} from '@angular/common/http';

const API_URL = '../../assets/';
const facturas = '/factura.json';

@Injectable()
export class FacturaService{
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor (private http: HttpClient) {}
    
    /**
    * Returns the Observable object containing the list of medicamentos retrieved from the API
    * @returns The list of medicamentos in real time
    */
    getFacturas() : Observable<Factura[]>{
        return this.http.get<Factura[]> (API_URL + facturas);
    }
    /**
    * Returns the Observable object containing the laboratorio retrieved from the API
    * @returns Laboratorio
    */
   // getLaboratorioDetail(facturaId): Observable<FacturaDetail> {
      //  return this.http.get<FacturaDetail>(API_URL + facturas + '/' + facturaId);
   // }
}


