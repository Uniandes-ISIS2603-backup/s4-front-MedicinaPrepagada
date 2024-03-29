
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Paciente} from '../paciente/paciente';
import {Factura} from './factura';
const API_URL = environment.apirURL;
const facturas = '/facturas';
const pacientes = '/pacientes';

@Injectable()
export class FacturaService{
    
    headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    });
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
    
    createFactura(factura): Observable<Factura>{
        return this.http.post<Factura>(API_URL + facturas, factura).catch(err => this.handleError(err));
    }
    updateFactura(factura): Observable<Factura> {
        return this.http.put<Factura>(API_URL + facturas + '/' + factura.idFactura, factura);
    }
    
    /**
    * Returns the Observable object containing the laboratorio retrieved from the API
    * @returns Factura
    */
    getFactura(facturaId): Observable<Factura>
    {
        return this.http.get<Factura>(API_URL + facturas + '/' +facturaId).catch(err => this.handleError(err));
    }
    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}

