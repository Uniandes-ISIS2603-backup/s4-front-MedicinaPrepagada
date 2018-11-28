/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {OrdenMedica} from './ordenMedica';
import {environment} from '../../environments/environment';

const API_URL = environment.apirURL;
const ordenesMedicas = '/ordenesMedicas';

@Injectable()
export class OrdenMedicaService
{    
    /**
   * Cosntructor de OrdenMedicaService
   */ 
    constructor (private http: HttpClient) {}
    
    /**
   * Metodo para obtener las ordenes medicas
   */ 
    getOrdenesMedicas() : Observable<OrdenMedica[]>
    {
        return this.http.get<OrdenMedica[]> (API_URL + ordenesMedicas);
    }
    
    /**
   * Metodo para obtener una orden medica con el identificador que entra por parametro
   */ 
    getOrdenMedica(ordenMedicaId): Observable<OrdenMedica>
    {
        return this.http.get<OrdenMedica>(API_URL + ordenesMedicas + '/' + ordenMedicaId).catch(err => this.handleError(err));
    }
    
    /**
   * Metodo para crear una orden medica
   */ 
    createOrdenMedica(ordenMedica): Observable<OrdenMedica> {
        return this.http.post<OrdenMedica>(API_URL + ordenesMedicas, ordenMedica).catch(err => this.handleError(err));
    }
    
    /**
   * Metodo para editar una orden medica
   */ 
    updateOrdenMedica(ordenMedica, ordenMedicaId ): Observable<OrdenMedica> {
        return this.http.put<OrdenMedica>(API_URL + ordenesMedicas + '/' + ordenMedica.id, ordenMedica);
    }
    
    /**
   * Metodo para eliminar una orden medica
   */ 
    deleteOrdenMedica(ordenMedicaId): Observable<OrdenMedica> {
        return this.http.delete<OrdenMedica>(API_URL + ordenesMedicas + '/' + ordenMedicaId);
    }
    
    /**
   * Metodo para manejar los errores
   */ 
    private handleError(error: any)
        {
        return throwError(error.error.errorMessage);
    }
}

