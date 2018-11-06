/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'; 

import {HistoriaClinica} from './historiaClinica';

const API_URL = environment.apirURL;
const historiasClinicas = '/historiasClinicas';
const historiaClinicaDetail = '/historiaClinicaDetails';

@Injectable()
export class HistoriaClinicaService
{    
    constructor (private http: HttpClient) {}
    
    getHistoriasClinicas() : Observable<HistoriaClinica[]>
    {
        return this.http.get<HistoriaClinica[]> (API_URL + historiasClinicas);
    }
    
    getHistoriaClinica(historiaClinicaId): Observable<HistoriaClinica>
    {
        return this.http.get<HistoriaClinica>(API_URL + historiasClinicas+ '/' + historiaClinicaId).catch(err => this.handleError(err));
    }
    
    createHistoriaClinica(historiaClinica): Observable<HistoriaClinica> {
        return this.http.post<HistoriaClinica>(API_URL + historiasClinicas, historiaClinica).catch(err => this.handleError(err));
    }
    
    private handleError(error: any)
        {
        return throwError(error.error.errorMessage);
    }
}



