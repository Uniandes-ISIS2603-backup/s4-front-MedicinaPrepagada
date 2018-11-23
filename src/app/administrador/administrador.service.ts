/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'; 

import {Administrador} from './administrador';

const API_URL = environment.apirURL;
const administradores = '/administradores';
import 'rxjs/add/operator/catch';

@Injectable()
export class AdministradorService
{    
    headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    });
    
    constructor (private http: HttpClient) {}
    
    getAdministradores() : Observable<Administrador[]>
    {
        return this.http.get<Administrador[]> (API_URL + administradores);
    }
    
    getAdministrador(administradorId): Observable<Administrador>
    {
        return this.http.get<Administrador>(API_URL + administradores + '/' + administradorId).catch(err => this.handleError(err));
    }
    
    createAdministrador(administrador): Observable<Administrador> {
        return this.http.post<Administrador>(API_URL + administradores, administrador).catch(err => this.handleError(err));
    }
    
    deleteAdministrador(administradorId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + administradores + '/' + administradorId);
    }
    
    updateAdministrador(administrador, administradorId ): Observable<Administrador> {
        return this.http.put<Administrador>(API_URL + administradores + '/' + administradorId  , administrador).catch(err => this.handleError(err));;
    }
    
    private handleError(error: any)
    {
        return throwError(error.error.errorMessage);
    }
}

