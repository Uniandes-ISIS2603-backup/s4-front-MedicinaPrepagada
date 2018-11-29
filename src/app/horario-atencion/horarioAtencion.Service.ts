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
    
    getHorariosAtencion() : Observable<HorarioAtencion[]>{
        return this.http.get<HorarioAtencion[]> (API_URL + horariosAtencion);
    }
    
      
    getHorarioAtencion(horarioAtencionId): Observable<HorarioAtencion>
    {
        return this.http.get<HorarioAtencion>(API_URL + horariosAtencion+ '/' + horarioAtencionId ).catch(err => this.handleError(err));
    }
    
    createHorarioAtencion(horarioAtencion): Observable<HorarioAtencion>{
        return this.http.post<HorarioAtencion>(API_URL + horariosAtencion, horarioAtencion).catch(err => this.handleError(err));
    }
    
    updateHorarioAtencion(horarioAtencion): Observable<HorarioAtencion>{
        return this.http.put<HorarioAtencion>(API_URL + horariosAtencion + '/' + horarioAtencion.id , horarioAtencion).catch(err => this.handleError(err));
    }

         /**
    * Deletes a sede
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

