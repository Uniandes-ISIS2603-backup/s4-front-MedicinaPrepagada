/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import { Observable , throwError} from 'rxjs';
import {environment} from '../../environments/environment'; 

import {Especialidad} from './especialidad';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';

const API_URL = environment.apirURL;
const especialidades = '/especialidad';

@Injectable()
export class EspecialidadService{
    
    constructor (private http: HttpClient) {}
    
    getEspecialidades() : Observable<Especialidad[]>{
        return this.http.get<Especialidad[]> (API_URL + especialidades);
    }
    
    getEspecialidad(idEspecialidad): Observable<Especialidad>{
        return this.http.get<Especialidad>(API_URL + especialidades + '/' + idEspecialidad ).catch(err => this.handleError(err));
    }
    
    createEspecialidad(especialidad): Observable<Especialidad>{
        return this.http.post<Especialidad>(API_URL + especialidades, especialidad).catch(err => this.handleError(err));
    }
    
     private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}



