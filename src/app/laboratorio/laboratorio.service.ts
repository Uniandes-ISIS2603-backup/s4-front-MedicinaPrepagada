/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

	import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Laboratorio} from './laboratorio';
import {HttpClient} from '@angular/common/http';

const API_URL = '../../assets/';
const laboratorios = '/laboratorio.json';

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
}

