/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';

import {Laboratorio} from './laboratorio';
import {HttpClient} from '@angular/common/http';

const API_URL = environment.apirURL;
const laboratorios = '/laboratorios';
const laboratorioDetail = '/laboratorioDetails';

@Injectable()
export class LaboratorioService{
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor (private http: HttpClient) {}
    
    /**
    * Returns the Observable object containing the list of medicamentos retrieved from the API
    * @returns The list of medicamentos in real time
    */
    getLaboratorios() : Observable<Laboratorio[]>{
        return this.http.get<Laboratorio[]> (API_URL + laboratorios);
    }
    
    createLaboratorio(laboratorio): Observable<Laboratorio>{
        return this.http.post<Laboratorio>(API_URL + laboratorios, laboratorio).catch(err => this.handleError(err));
    }
    
    updateLaboratorio(laboratorio): Observable<Laboratorio> {
        return this.http.put<Laboratorio>(API_URL + laboratorios + '/' + laboratorio.id, laboratorio);
    }
    /**
    * Deletes an lab
    * @param labId The id of the lab
    * @returns The confirmation that the lab was deleted
    */
    deleteLaboratorio(laboratorioId): Observable<Laboratorio> {
        return this.http.delete<Laboratorio>(API_URL + laboratorios + '/' + laboratorioId);
    }
    /**
    * Returns the Observable object containing the laboratorio retrieved from the API
    * @returns Laboratorio
    */
    getLaboratorio(laboratorioId): Observable<Laboratorio>
    {
        return this.http.get<Laboratorio>(API_URL + laboratorios+ '/' + laboratorioId).catch(err => this.handleError(err));
    }
    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}
