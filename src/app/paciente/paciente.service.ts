/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import { Observable , throwError} from 'rxjs';
import {environment} from '../../environments/environment'; 

import {Paciente} from './paciente';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';

const API_URL = environment.apirURL;
const pacientes = '/pacientes';
const pacienteDetail = '/pacienteDetails';

@Injectable()
export class PacienteService{
    
    constructor (private http: HttpClient) {}
    
    getPacientes() : Observable<Paciente[]>{
        return this.http.get<Paciente[]> (API_URL + pacientes);
    }
    
    getPaciente(pacienteId): Observable<Paciente>{
        return this.http.get<Paciente>(API_URL + pacientes+ '/' + pacienteId ).catch(err => this.handleError(err));
    }
    
    createPaciente(paciente): Observable<Paciente>{
        return this.http.post<Paciente>(API_URL + pacientes, paciente).catch(err => this.handleError(err));
    }
    
    
    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}