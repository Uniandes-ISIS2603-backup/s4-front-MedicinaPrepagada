/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {Administrador} from './administrador';

const API_URL = '../../assets/';
const administradores = '/administradores.json';
const administradorDetail = '/administradorDetails';

@Injectable()
export class AdministradorService
{    
    constructor (private http: HttpClient) {}
    
    getAdministradores() : Observable<Administrador[]>
    {
        return this.http.get<Administrador[]> (API_URL + administradores);
    }
    
    getAdministrador(administradorId): Observable<Administrador>
    {
        return this.http.get<Administrador>(API_URL + administradorDetail+ '/' + administradorId + '.json').catch(err => this.handleError(err));
    }
    
    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}

