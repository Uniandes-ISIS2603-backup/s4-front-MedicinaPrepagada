import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Medicamento } from './medicamento';
import { MedicamentoDetail } from './medicamento-detail';
import { Observable , throwError} from 'rxjs';

import { Farmacia } from '../farmacia/farmacia';
import 'rxjs/add/operator/catch';



import {environment} from '../../environments/environment'; 


const API_URL = "http://localhost:8080/s4_MedicinaPrepagada-api/api";
const medicamentos = '/medicamentos';
const farmacias = '/farmacias';

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
    
    /**
     * da las farmacias del medicamento con el id dado
     */
    getFarmaciasMedicamento(medicamentoId): Observable<Farmacia[]>{
        return this.http.get<Farmacia[]>(API_URL + medicamentos + '/' + medicamentoId + farmacias).catch(err => this.handleError(err));
    }
    
    /**
     * crea una tarjeta de credito y la asocia con el paciente con el id dado
     */
    addFarmacia(medicamentoId, farmaciaId): Observable<Farmacia>{
        return this.http.post<Farmacia>(API_URL + medicamentos + '/' + medicamentoId + farmacias + '/' + farmaciaId).catch(err => this.handleError(err));
    }
    
     /**
     * metodo para manejar las exceptions
     */
    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}




