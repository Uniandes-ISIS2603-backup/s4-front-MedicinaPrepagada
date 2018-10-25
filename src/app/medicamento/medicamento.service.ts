import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Medicamento } from './medicamento';
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
    * @returns The list of medicamentos in real time
    */
    getMedicamentos(): Observable<Medicamento[]> {
        return this.http.get<Medicamento[]>(API_URL + medicamentos);
    }
}




