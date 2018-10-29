import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ExamenMedico } from './examenmedico';
import { ExamenMedicoDetail } from './examenmedico-detail';

import {environment} from '../../environments/environment'; 


const API_URL = "http://localhost:8080/s4_MedicinaPrepagada-api/api";
const examenes = '/examenesMedicos';
/**
* The service provider for everything related to examenes medicos
*/
@Injectable()
export class ExamenMedicoService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of examenes medicos retrieved from the API
    * @returns The list of examanes medicos in real time from the back app
    */
    getExamenesMedicos(): Observable<ExamenMedico[]> {
        return this.http.get<ExamenMedico[]>(API_URL + examenes);
    }
    
     /**
    * Returns the Observable object containing the examen medico retrieved from the API
    * @returns The examenmedico
    */
    getExamenMedicoDetail(examenId): Observable<ExamenMedicoDetail> {
        return this.http.get<ExamenMedicoDetail>(API_URL + examenes + '/' + examenId);
    }
    
    /**
    * Creates a examen medico
    * @param examen The examen medicowhich will be created
    * @returns The confirmation of the examen medico's creation
    */
    createExamenMedico(examen): Observable<ExamenMedico> {
        return this.http.post<ExamenMedico>(API_URL + examenes, examen);
    }
}






