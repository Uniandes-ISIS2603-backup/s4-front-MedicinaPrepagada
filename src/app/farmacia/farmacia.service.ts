import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Farmacia } from './farmacia';
import { FarmaciaDetail } from './farmacia-detail';

import {environment} from '../../environments/environment'; 


const API_URL = "http://localhost:8080/s4_MedicinaPrepagada-api/api";
const farmacias = '/farmacias';
/**
* The service provider for everything related to farmacias
*/
@Injectable()
export class FarmaciaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of farmacias retrieved from the API
    * @returns The list of farmacias in real time from the back app
    */
    getFarmacias(): Observable<Farmacia[]> {
        return this.http.get<Farmacia[]>(API_URL + farmacias);
    }
    
     /**
    * Returns the Observable object containing the farmacia retrieved from the API
    * @returns The farmacia
    */
    getFarmaciaDetail(farmaciaId): Observable<FarmaciaDetail> {
        return this.http.get<FarmaciaDetail>(API_URL + farmacias + '/' + farmaciaId);
    }
    
    /**
    * Creates a farmacia
    * @param farmacia The farmacia which will be created
    * @returns The confirmation of the farmacia's creation
    */
    createFarmacia(farmacia): Observable<Farmacia> {
        return this.http.post<Farmacia>(API_URL + farmacias, farmacia);
    }
    
     /**
    * Updates an farmacia
    * @param farmacia The farmacia's information updated
    * @returns The confirmation that the farmacia was updated
    */
    updateFarmacia(farmacia): Observable<FarmaciaDetail> {
        return this.http.put<FarmaciaDetail>(API_URL + farmacias + '/' + farmacia.id, farmacia);
    }
    
    /**
    * Deletes an farmacia
    * @param farmaciaId The id of the farmacia
    * @returns The confirmation that the farmacia was deleted
    */
    deleteFarmacia(farmaciaId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + farmacias + '/' + farmaciaId);
    }
}





