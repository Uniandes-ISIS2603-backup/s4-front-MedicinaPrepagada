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
    
    deleteAdministrador(administradorId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + administradores + '/' + administradorId);
    }
    
    updateAdministrador(administrador): Observable<Administrador> {
        return this.http.put<Administrador>(API_URL + administradores + '/' + administrador.id, administrador);
    }
    
    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}

