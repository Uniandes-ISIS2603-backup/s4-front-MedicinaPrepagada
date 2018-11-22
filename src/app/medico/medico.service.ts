/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import { Observable , throwError} from 'rxjs';
import {environment} from '../../environments/environment'; 

import {Medico} from './medico';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';

const API_URL = environment.apirURL;
const medicos = '/medico';
const medicoDetail = '/medicoDetails';

/**
 *El servicio que provee todo lo relacionado con medicos
 */
@Injectable()
export class MedicoService{
    
    /**
    * Constructor del servicio
    * @param http The HttpClient - Es necesario para realizar solicitudes
    */
    constructor (private http: HttpClient) {}
    
    /**
    * Trae la lista de medicos en MediSistemas
    * @returns la lista de medicos
    */
    getMedicos() : Observable<Medico[]>{
        return this.http.get<Medico[]> (API_URL + medicos);
    }
    
    /**
    * Trae el detalle de un medico en MediSistemas
    * @returns detalle de un medico
    */
    getMedico(idMedico): Observable<Medico>{
        return this.http.get<Medico>(API_URL + medicos + '/' + idMedico ).catch(err => this.handleError(err));
    }
    
    /**
    * Crea un medico en MediSistemas
    * @returns medico creado
    */
    createMedico(medico): Observable<Medico>{
        return this.http.post<Medico>(API_URL + medicos, medico).catch(err => this.handleError(err));
    }
    
   /**
    * Updates an medico
    * @param medico The medico's information updated
    * @returns The confirmation that the medico was updated
    */
    updateMedico(medico): Observable<Medico> {
        return this.http.put<Medico>(API_URL + medicos + '/' + medico.idMedico, medico).catch(err => this.handleError(err));
    }
    
    /**
    * Trae un mensaje de error en caso de que haya un error
    * @returns error
    */
     private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}

