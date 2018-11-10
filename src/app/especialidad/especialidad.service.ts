/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import { Observable , throwError} from 'rxjs';
import {environment} from '../../environments/environment'; 

import {Especialidad} from './especialidad';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';

const API_URL = environment.apirURL;
const especialidades = '/especialidad';
const especialidadDetail = 'especialidadDetails';

/**
 *El servicio que provee todo lo relacionado con especialidades
 */
@Injectable()
export class EspecialidadService{
    
    /**
    * Constructor del servicio
    * @param http The HttpClient - Es necesario para realizar solicitudes
    */
    constructor (private http: HttpClient) {}
    
    /**
    * Trae la lista de especialidades en MediSistemas
    * @returns la lista de citas medicas
    */
    getEspecialidades() : Observable<Especialidad[]>{
        return this.http.get<Especialidad[]> (API_URL + especialidades);
    }
    
    /**
    * Trae el detalle de una especialidad en MediSistemas
    * @returns detalle de una especialidad
    */
    getEspecialidad(idEspecialidad): Observable<Especialidad>{
        return this.http.get<Especialidad>(API_URL + especialidades + '/' + idEspecialidad ).catch(err => this.handleError(err));
    }
    
    /**
    * Crea una especialidad en MediSistemas
    * @returns especialidad creada
    */
    createEspecialidad(especialidad): Observable<Especialidad>{
        return this.http.post<Especialidad>(API_URL + especialidades, especialidad).catch(err => this.handleError(err));
    }
    
    /**
    * Trae un mensaje de error en caso de que haya un error
    * @returns error
    */
     private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}



