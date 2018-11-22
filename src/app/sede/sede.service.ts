import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/catch';

import { Sede } from './sede';
import { SedeDetail } from './sede-detail';
import { Consultorio } from './consultorio';
import { ConsultorioDetail } from './consultorio-detail';


import {environment} from '../../environments/environment'; 

const API_URL = environment.apirURL;
const sedes = '/sedes';
const consultorios = '/consultorios';


@Injectable()
export class SedeService{
    
     /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor (private http: HttpClient) {}
    
    /**
    * Returns the Observable object containing the list of sedes retrieved from the API
    * @returns The list of sedes in real time
    */
    getSedes() : Observable<Sede[]>{
        return this.http.get<Sede[]> (API_URL + sedes);
    }
    
      /**
    * Returns the Observable object with the details of an sede retrieved from the API
    * @returns The sede details
    */ 
    getSedeDetail(sedeId): Observable<SedeDetail>
    {
        return this.http.get<SedeDetail>(API_URL + sedes+ '/' + sedeId ).catch(err => this.handleError(err));
    }
    
    
    /**
    * Creates a new sede
    * @param sede The new sede
    * @returns The sede with its new id if it was created, false if it wasn't
    */
    createSede(sede): Observable<Sede>{
        return this.http.post<Sede>(API_URL + sedes, sede).catch(err => this.handleError(err));
    }

        /**
    * Updates an sede
    * @param sede The sede's information updated
    * @returns The confirmation that the sede was updated
    */
    updateSede(sede): Observable<SedeDetail> {
        return this.http.put<SedeDetail>(API_URL + sedes + '/' + sede.id, sede);
    }
    
        /**
    * Deletes a sede
    * @param sedeId The sede's id
    * @returns True if the sede was deleted, false otherwise
    */
    deleteSede(sedeId): Observable<SedeDetail> {
        return this.http.delete<SedeDetail>(API_URL + sedes + '/' + sedeId);
    }
    

        /**
    * Creates a consultorio
    * @param consultorio The consultorio
    * @returns True if the consultorio was posted, false otherwise
    */
    createConsultorio(sedeId, consultorio): Observable<Consultorio> {
        return this.http.post<Consultorio>(API_URL + sedes + '/' + sedeId + consultorios, consultorio);
    }
    
    getConsultorioDetail(sedeId, consultorioId): Observable<ConsultorioDetail>
    {
        return this.http.get<ConsultorioDetail>(API_URL + sedes + '/' + sedeId  + consultorios + '/' + consultorioId ).catch(err => this.handleError(err));
    }
    
    
        /**
    * Updates an sede
    * @param sede The sede's information updated
    * @returns The confirmation that the sede was updated
    */
    updateConsultorio(sedeId, consultorio): Observable<ConsultorioDetail> {
        return this.http.put<ConsultorioDetail>(API_URL + sedes + '/' + sedeId + consultorios +'/' + consultorio.id, consultorio);
    }
    
           /**
    * Deletes a consultorio
    * @param sedeId The sede's id
    * @returns True if the sede was deleted, false otherwise
    */
    deleteConsultorio(sedeId, consultorioId): Observable<ConsultorioDetail> {
        return this.http.delete<ConsultorioDetail>(API_URL + sedes + '/' + sedeId + consultorios + '/' + consultorioId);
    }
    
    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}


