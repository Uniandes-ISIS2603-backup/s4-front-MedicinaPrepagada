/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import { Observable , throwError} from 'rxjs';
import {environment} from '../../environments/environment'; 

import {CitaMedica} from './cita-medica';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';

const API_URL = environment.apirURL;
const citasMedicas = '/citaMedica';
const citaMedicaDetail = '/citaMedicaDetails';

/**
 *El servicio que provee todo lo relacionado con citas medicas
 */
@Injectable()
export class CitaMedicaService{
    
    headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    });
    
    /**
    * Constructor del servicio
    * @param http The HttpClient - Es necesario para realizar solicitudes
    */
    constructor (private http: HttpClient) {}
    
    /**
    * Trae la lista de citas medicas en MediSistemas
    * @returns la lista de citas medicas
    */
    getCitasMedicas() : Observable<CitaMedica[]>{
        return this.http.get<CitaMedica[]> (API_URL + citasMedicas);
    }
    
    /**
    * Trae el detalle de una cita medica en MediSistemas
    * @returns detalle de una cita medica
    */
    getCitaMedica(idCitaMedica): Observable<CitaMedica>{
        return this.http.get<CitaMedica>(API_URL + citasMedicas + '/' + idCitaMedica ).catch(err => this.handleError(err));
    }
    
    /**
    * Crea una cita medica en MediSistemas
    * @returns cita medica creada
    */
    createCitaMedica(citaMedica): Observable<CitaMedica>{
        return this.http.post<CitaMedica>(API_URL + citasMedicas, citaMedica).catch(err => this.handleError(err));
    }
    
    /**
    * Trae un mensaje de error en caso de que haya un error
    * @returns error
    */
     private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
    
//    getTarjetasCreditoPaciente(pacienteId): Observable<TarjetaCredito[]>{
//        return this.http.get<TarjetaCredito[]>(API_URL + pacientes + '/' + pacienteId + tarjetasCredito).catch(err => this.handleError(err));
//    }
    
    /**
    * Trae la lista de citas medicas en MediSistemas
    * @returns la lista de citas medicas
    */
    getPacientes() : Observable<PacienteBase[]>{
        return this.http.get<PacienteBase[]> (API_URL + '/pacientes/base');
    }
}



