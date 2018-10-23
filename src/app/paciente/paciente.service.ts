/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {Paciente} from './paciente';
import {HttpClient} from '@angular/common/http';

const API_URL = '../../assets/';
const pacientes = '/pacientes.json';

@Injectable()
export class PacienteService{
    
    constructor (private http: HttpClient) {}
    
    getPacientes() : Observable<Paciente[]>{
        return this.http.get<Paciente[]> (API_URL + pacientes);
    }
}