import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Medicamento } from './medicamento';
import { MedicamentoDetail } from './medicamento-detail';

import {environment} from '../../environments/environment'; 


const API_URL = "http://localhost:8080/s4_MedicinaPrepagada-api/api";
const medicamentos = '/medicamentos';
/**
* The service provider for everything related to medicamentos
*/
@Injectable()
export class MedicamentoService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of medicamentos retrieved from the API
    * @returns The list of medicamentos in real time from the back app
    */
    getMedicamentos(): Observable<Medicamento[]> {
        return this.http.get<Medicamento[]>(API_URL + medicamentos);
    }
    
     /**
    * Returns the Observable object containing the medicamento retrieved from the API
    * @returns The medicamento
    */
    getMedicamentoDetail(medicamentoId): Observable<MedicamentoDetail> {
        return this.http.get<MedicamentoDetail>(API_URL + medicamentos + '/' + medicamentoId);
    }
    
    /**
    * Creates a medicamento
    * @param medicamento The medicamento which will be created
    * @returns The confirmation of the medicamento's creation
    */
    createMedicamento(medicamento): Observable<Medicamento> {
        return this.http.post<Medicamento>(API_URL + medicamentos, medicamento);
    }
    
     /**
    * Updates an medicamento
    * @param medicamento The medicamento's information updated
    * @returns The confirmation that the medicamento was updated
    */
    updateMedicamento(medicamento): Observable<MedicamentoDetail> {
        return this.http.put<MedicamentoDetail>(API_URL + medicamentos + '/' + medicamento.id, medicamento);
    }
    
    /**
    * Deletes an medicamento from the BookStore
    * @param medicamentoId The id of the medicamento
    * @returns The confirmation that the medicamento was deleted
    */
    deleteMedicamento(medicamentoId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + medicamentos + '/' + medicamentoId);
    }
}




