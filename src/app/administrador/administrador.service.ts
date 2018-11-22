/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'; 

import {Administrador} from './administrador';

const API_URL = environment.apirURL;
const administradores = '/administradores';
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
        return this.http.get<Administrador>(API_URL + administradores+ '/' + administradorId).catch(err => this.handleError(err));
    }
    
    createAdministrador(administrador): Observable<Administrador> {
        return this.http.post<Administrador>(API_URL + administradores, administrador).catch(err => this.handleError(err));
    }
    
    deleteAdministrador(administradorId): Observable<Boolean> {
        return this.http.delete<Boolean>(API_URL + administradores + '/' + administradorId);
    }
    
    updateAdministrador(administrador): Observable<Boolean> {
        return this.http.put<Boolean>(API_URL + administradores , administrador).catch(err => this.handleError(err));;
    }
    
    private handleError(error: any)
    {
        return throwError(error.error.errorMessage);
    }
}

