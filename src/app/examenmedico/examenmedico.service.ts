import { Injectable } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ExamenMedico } from './examenmedico';
import { ExamenMedicoDetail } from './examenmedico-detail';
import { Laboratorio } from '../laboratorio/laboratorio';
import 'rxjs/add/operator/catch';

import {environment} from '../../environments/environment'; 

const API_URL = "http://localhost:8080/s4_MedicinaPrepagada-api/api";
const examenes = '/examenesMedicos';
const laboratorios = '/laboratorios';

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
    
       /**
    * Updates an examenMedico
    * @param examenMedico The examenMedico's information updated
    * @returns The confirmation that the examenMedico was updated
    */
    updateExamenMedico(examenMedico): Observable<ExamenMedicoDetail> {
        return this.http.put<ExamenMedicoDetail>(API_URL + examenes + '/' + examenMedico.id, examenMedico);
    }
    
    /**
    * Deletes an examenMedico from the BookStore
    * @param examenMedicoId The id of the examenMedico
    * @returns The confirmation that the examenMedico was deleted
    */
    deleteExamenMedico(examenMedicoId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + examenes + '/' + examenMedicoId);
    }
    
    /**
     * da los laboratorios del examen con el id dado
     */
    getLaboratoriosExamen(examenId): Observable<Laboratorio[]>{
        return this.http.get<Laboratorio[]>(API_URL + examenes + '/' + examenId + laboratorios).catch(err => this.handleError(err));
    }
    
    /**
     * asocia un laboratorio existente con un examen
     */
    addLaboratorio(examenId, laboratorioId): Observable<Laboratorio>{
        return this.http.post<Laboratorio>(API_URL + examenes + '/' + examenId + laboratorios + '/' + laboratorioId, examenId).catch(err => this.handleError(err));
    }
    
     /**
     * metodo para manejar las exceptions
     */
    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}


