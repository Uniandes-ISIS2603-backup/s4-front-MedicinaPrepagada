/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {OrdenMedica} from './ordenMedica';

const API_URL = '../../assets/';
const ordenesMedicas = '/ordenesMedicas.json';
const ordenMedicaDetail = '/ordenMedicaDetails';

@Injectable()
export class OrdenMedicaService
{    
    constructor (private http: HttpClient) {}
    
    getOrdenesMedicas() : Observable<OrdenMedica[]>
    {
        return this.http.get<OrdenMedica[]> (API_URL + ordenesMedicas);
    }
    
    getOrdenMedica(ordenMedicaId): Observable<OrdenMedica>
    {
        return this.http.get<OrdenMedica>(API_URL + ordenMedicaDetail+ '/' + ordenMedicaId + '.json').catch(err => this.handleError(err));
    }
    
    private handleError(error: any)
        {
        return throwError(error.error.errorMessage);
    }
}

