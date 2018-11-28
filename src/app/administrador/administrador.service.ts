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
    
    /**
     * Constructor de AdministradorService
    */ 
    constructor (private http: HttpClient) {}
    
    /**
     * Metodo para obtener todos los administradores
    */
    getAdministradores() : Observable<Administrador[]>
    {
        return this.http.get<Administrador[]> (API_URL + administradores);
    }
    
     /**
     * Metodo para obtener el administrador con el identificador dado por parametro
    */
    getAdministrador(administradorId): Observable<Administrador>
    {
        return this.http.get<Administrador>(API_URL + administradores + '/' + administradorId).catch(err => this.handleError(err));
    }
    
     /**
     * Metodo para crear un administrador
    */
    createAdministrador(administrador): Observable<Administrador> {
        return this.http.post<Administrador>(API_URL + administradores, administrador).catch(err => this.handleError(err));
    }
    
     /**
     * Metodo para eliminar un administrador
    */
    deleteAdministrador(administradorId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + administradores + '/' + administradorId);
    }
    
     /**
     * Metodo para editar un administrador
    */
    updateAdministrador(administrador, administradorId ): Observable<Administrador> {
        return this.http.put<Administrador>(API_URL + administradores + '/' + administradorId  , administrador).catch(err => this.handleError(err));;
    }
    
     /**
     * Metodo para manejar los errores
    */
    private handleError(error: any)
    {
        return throwError(error.error.errorMessage);
    }
}

