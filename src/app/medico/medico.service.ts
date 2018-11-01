/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import { Observable , throwError} from 'rxjs';
import {environment} from '../../environments/environment'; 

import {Medico} from './medico';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';

const API_URL = environment.apirURL;
const medicos = '/medico';
const medicoDetail = '/medicoDetails';

@Injectable()
export class MedicoService{
    
    constructor (private http: HttpClient) {}
    
    getMedicos() : Observable<Medico[]>{
        return this.http.get<Medico[]> (API_URL + medicos);
    }
    
    getMedico(idMedico): Observable<Medico>{
        return this.http.get<Medico>(API_URL + medicos + '/' + idMedico ).catch(err => this.handleError(err));
    }
    
    createMedico(medico): Observable<Medico>{
        return this.http.post<Medico>(API_URL + medicos, medico).catch(err => this.handleError(err));
    }
    
     private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}

