/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import { Observable , throwError} from 'rxjs';
import {environment} from '../../environments/environment'; 

import {Paciente} from './paciente';
import {TarjetaCredito} from '../tarjeta-credito/tarjeta-credito';
import {CitaLaboratorio} from '../citalaboratorio/citalaboratorio';
import {Factura} from '../factura/factura';
import {CitaMedica} from '../cita-medica/cita-medica';
import {HistoriaClinica} from '../historiaClinica//historiaClinica';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';

const API_URL = environment.apirURL;
const pacientes = '/pacientes';
const tarjetasCredito = '/tarjetascredito';
const citasLaboratorio = '/citaslaboratorio';
const facturas = '/facturas';
const citasMedicas = '/citasmedicas';
const historiasClinicas = '/historiasclinicas';

@Injectable()
export class PacienteService{
    
    constructor (private http: HttpClient) {}
    
    getPacientes() : Observable<Paciente[]>{
        return this.http.get<Paciente[]> (API_URL + pacientes);
    }
    
    getPaciente(pacienteId): Observable<Paciente>{
        return this.http.get<Paciente>(API_URL + pacientes+ '/' + pacienteId ).catch(err => this.handleError(err));
    }
    
    createPaciente(paciente): Observable<Paciente>{
        return this.http.post<Paciente>(API_URL + pacientes, paciente).catch(err => this.handleError(err));
    }
    
    getTarjetasCreditoPaciente(pacienteId): Observable<TarjetaCredito[]>{
        return this.http.get<TarjetaCredito[]>(API_URL + pacientes + '/' + pacienteId + tarjetasCredito).catch(err => this.handleError(err));
    }
    
    getCitasLaboratorioPaciente(pacienteId): Observable<CitaLaboratorio[]>{
        return this.http.get<CitaLaboratorio[]>(API_URL + pacientes + '/' + pacienteId + citasLaboratorio).catch(err => this.handleError(err));
    }
    
    getFacturasPaciente(pacienteId): Observable<Factura[]>{
        return this.http.get<Factura[]>(API_URL + pacientes + '/' + pacienteId + facturas).catch(err => this.handleError(err));
    }
    
    getCitasMedicasPaciente(pacienteId): Observable<CitaMedica[]>{
        return this.http.get<CitaMedica[]>(API_URL + pacientes + '/' + pacienteId + citasMedicas).catch(err => this.handleError(err));
    }
    
    getHistoriasClinicasPaciente(pacienteId): Observable<HistoriaClinica[]>{
        return this.http.get<HistoriaClinica[]>(API_URL + pacientes + '/' + pacienteId + historiasClinicas).catch(err => this.handleError(err));
    }
    
    
    
    
    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}