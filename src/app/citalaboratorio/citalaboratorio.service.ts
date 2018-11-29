/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {CitaLaboratorio} from './citalaboratorio';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Laboratorio} from '../laboratorio/laboratorio';

const API_URL = environment.apirURL;
const citaslaboratorio = '/citaLaboratorio';

@Injectable()
export class CitaLaboratorioService{
    
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
    * @returns The list of citas in real time
    */
    getCitasLaboratorio() : Observable<CitaLaboratorio[]>{
        return this.http.get<CitaLaboratorio[]> (API_URL + citaslaboratorio);
    }
    
    getLaboratorioFromCita (citaLabId): Observable<Laboratorio>
    {
        return this.http.get<Laboratorio>(API_URL + citaslaboratorio + '/' +citaLabId+ '/laboratorio' ).catch(err => this.handleError(err));
    }
    
    updateCitaLaboratorio(citaLaboratorio): Observable<CitaLaboratorio> {
        return this.http.put<CitaLaboratorio>(API_URL + citaslaboratorio + '/' + citaLaboratorio.id, citaLaboratorio);
    }
    /**  
     * Crea una cita de laboratorio
     */
    createCitaLaboratorio(citalaboratorio): Observable<CitaLaboratorio>{
        return this.http.post<CitaLaboratorio>(API_URL + citaslaboratorio, citalaboratorio).catch(err => this.handleError(err));
    }
    /**
    * Deletes an citalab
    * @param citalabId The id of the citalab
    * @returns The confirmation that the citalab was deleted
    */
    deleteCitaLaboratorio(citaLaboratorioId): Observable<CitaLaboratorio> {
        return this.http.delete<CitaLaboratorio>(API_URL + citaslaboratorio + '/' + citaLaboratorioId);
    }
    /**
    * Returns the Observable object containing the cita laboratorio retrieved from the API
    * @returns CitaLaboratorio
    */
    getCitaLaboratorio(citaLabId): Observable<CitaLaboratorio>
    {
        return this.http.get<CitaLaboratorio>(API_URL + citaslaboratorio + '/' +citaLabId ).catch(err => this.handleError(err));
    }
        private handleError(error: any){
        return throwError(error.error.errorMessage);
    }

}

