/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import { Observable , throwError} from 'rxjs';

import {Medico} from './Medico';
import {HttpClient} from '@angular/common/http';

const API_URL = '../../assets/';
const medicos = '/medicos.json';

@Injectable()
export class MedicoService{
    
    constructor (private http: HttpClient) {}
    
    getMedicos() : Observable<Medico[]>{
        return this.http.get<Medico[]> (API_URL + medicos);
    }
}

