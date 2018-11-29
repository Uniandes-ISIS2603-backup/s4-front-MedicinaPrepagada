/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'; 

import {HistoriaClinica} from './historiaClinica';
import {OrdenMedica} from '../ordenMedica/ordenMedica';

const API_URL = environment.apirURL;
const historiasClinicas = '/historiasClinicas';
const ordenesMedicas = '/ordenMedica'


@Injectable()
export class HistoriaClinicaService
{    
    /**
   * Constructor de HistoriaClinicaService
   */  
    constructor (private http: HttpClient) {}
    
    /**
   * Mtodo para obtener todas las historias clinicas
   */  
    getHistoriasClinicas() : Observable<HistoriaClinica[]>
    {
        return this.http.get<HistoriaClinica[]> (API_URL + historiasClinicas);
    }
    
    /**
   * Metodo para obenter una historia clinica segun el identificador dado
   */  
    getHistoriaClinica(historiaClinicaId): Observable<HistoriaClinica>
    {
        return this.http.get<HistoriaClinica>(API_URL + historiasClinicas+ '/' + historiaClinicaId).catch(err => this.handleError(err));
    }
    
    /**
   * Metodo para crear una historia clinica
   */  
    createHistoriaClinica(historiaClinica): Observable<HistoriaClinica> {
        return this.http.post<HistoriaClinica>(API_URL + historiasClinicas, historiaClinica).catch(err => this.handleError(err));
    }
    
    /**
   * Metodo para editar una historia clinica
   */  
    updateHistoriaClinica(historiaClinica, historiaClinicaId): Observable<HistoriaClinica> {
        return this.http.put<HistoriaClinica>(API_URL + historiasClinicas + '/' + historiaClinicaId, historiaClinica).catch(err => this.handleError(err));;
    }
    
    /**
   * Metodo para eliminar una historia clinica
   */  
    deleteHistoriaClinica(historiaClinicaId): Observable<HistoriaClinica> 
    {
        return this.http.delete<HistoriaClinica>(API_URL + historiasClinicas + '/' + historiaClinicaId);
    }
    
    
    /**
   * Metodo para obtener las ordenes medicas de una historia clinica
   */  
    getOrdenesHistoriaClinica(historiaClinicaId): Observable<OrdenMedica[]>{
        return this.http.get<OrdenMedica[]>(API_URL + historiasClinicas + '/' + historiaClinicaId + ordenesMedicas).catch(err => this.handleError(err));
    }
    
    /**
   * Metodo para manejar los errores
   */  
    private handleError(error: any)
        {
        return throwError(error.error.errorMessage);
    }
}



