/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {CitaLaboratorio} from './citalaboratorio';
//import {citaLaboratorioDetail} from './citalaboratorio-detail';
import {HttpClient} from '@angular/common/http';

const API_URL = '../../assets/';
const citaslaboratorio = '/citalaboratorio.json';

@Injectable()
export class CitaLaboratorioService{
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor (private http: HttpClient) {}
    
    /**
    * Returns the Observable object containing the list of medicamentos retrieved from the API
    * @returns The list of citas in real time
    */
    getCitasLaboratorio() : Observable<CitaLaboratorio[]>{
        return this.http.get<CitaLaboratorio[]> (API_URL + citaslaboratorio);
    }
    /**
    * Returns the Observable object containing the laboratorio retrieved from the API
    * @returns Laboratorio
    */
   // getLaboratorioDetail(laboratorioId): Observable<LaboratorioDetail> {
    //    return this.http.get<LaboratorioDetail>(API_URL + laboratorios + '/' + laboratorioId);
   // }
}

