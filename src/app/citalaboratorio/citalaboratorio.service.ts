/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {CitaLaboratorio} from './citalaboratorio';
import {HttpClient} from '@angular/common/http';
const API_URL = '../../assets/';
const citaslaboratorio = '/citaLaboratorio.json';
const citaLabDetail = '/citaLaboratorioDetails';

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
    getCitaLaboratorio(citaLabId): Observable<CitaLaboratorio>
    {
        return this.http.get<CitaLaboratorio>(API_URL + citaLabDetail+ '/' +citaLabId + '.json').catch(err => this.handleError(err));
    }
        private handleError(error: any){
        return throwError(error.error.errorMessage);
    }

}

