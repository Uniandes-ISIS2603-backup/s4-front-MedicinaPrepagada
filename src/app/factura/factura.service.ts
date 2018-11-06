/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Factura} from './factura';
const API_URL = '../../assets/';
const facturas = '/factura.json';
const facturaDetail = '/facturaDetails';

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
    * @returns Factura
    */
    getFactura(facturaId): Observable<Factura>
    {
        return this.http.get<Factura>(API_URL + facturaDetail+ '/' +facturaId + '.json').catch(err => this.handleError(err));
    }
    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}


