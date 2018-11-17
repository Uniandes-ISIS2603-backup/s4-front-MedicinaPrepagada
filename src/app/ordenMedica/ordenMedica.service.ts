/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {OrdenMedica} from './ordenMedica';
import {environment} from '../../environments/environment';

const API_URL = environment.apirURL;
const ordenesMedicas = '/ordenesMedicas';
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
        return this.http.get<OrdenMedica>(API_URL + ordenesMedicas + '/' + ordenMedicaId).catch(err => this.handleError(err));
    }
    
    createOrdenMedica(ordenMedica): Observable<OrdenMedica> {
        return this.http.post<OrdenMedica>(API_URL + ordenesMedicas, ordenMedica).catch(err => this.handleError(err));
    }
    
    updateOrdenMedica(ordenMedica): Observable<OrdenMedica> {
        return this.http.put<OrdenMedica>(API_URL + ordenesMedicas + '/' + ordenMedica.id, ordenMedica);
    }
    
    deleteOrdenMedica(ordenMedicaId): Observable<OrdenMedica> {
        return this.http.delete<OrdenMedica>(API_URL + ordenesMedicas + '/' + ordenMedicaId);
    }
    
    private handleError(error: any)
        {
        return throwError(error.error.errorMessage);
    }
}

