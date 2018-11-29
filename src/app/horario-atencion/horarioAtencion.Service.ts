import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {environment} from '../../environments/environment'; 
import 'rxjs/add/operator/catch';

import { HorarioAtencion } from './horarioAtencion';


const API_URL = environment.apirURL;
const horariosAtencion = '/horariosAtencion';

const horarioAtencionDetail = '/horarioAtencionDetails';




@Injectable()
export class HorarioAtencionService{
    
    constructor (private http: HttpClient) {}
    
    /**
     * Retorna los horarios de atencion
     */
    getHorariosAtencion() : Observable<HorarioAtencion[]>{
        return this.http.get<HorarioAtencion[]> (API_URL + horariosAtencion);
    }
    
     /**
      * Retorna un horario de atencion
      */ 
    getHorarioAtencion(horarioAtencionId): Observable<HorarioAtencion>
    {
        return this.http.get<HorarioAtencion>(API_URL + horariosAtencion+ '/' + horarioAtencionId ).catch(err => this.handleError(err));
    }
    /**
     * Crea un horario de atencion
     */
    createHorarioAtencion(horarioAtencion): Observable<HorarioAtencion>{
        return this.http.post<HorarioAtencion>(API_URL + horariosAtencion, horarioAtencion).catch(err => this.handleError(err));
    }
    /**
     * Actualiza un horario de atencion
     */
    updateHorarioAtencion(horarioAtencion): Observable<HorarioAtencion>{
        return this.http.put<HorarioAtencion>(API_URL + horariosAtencion + '/' + horarioAtencion.id , horarioAtencion).catch(err => this.handleError(err));
    }

         /**
    * Deletes a horario de atencion
    * @param sedeId The sede's id
    * @returns True if the sede was deleted, false otherwise
    */
    deleteHorarioAtencion(horarioAtencionId): Observable<HorarioAtencion> {
        return this.http.delete<HorarioAtencion>(API_URL + horariosAtencion + '/' + horarioAtencionId);
    }
    
    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}

