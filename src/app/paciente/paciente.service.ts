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
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    
    headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    });
    
    constructor (private http: HttpClient) {}
    
    /**
     * da todos los pacientes
     */
    getPacientes() : Observable<Paciente[]>{
        return this.http.get<Paciente[]> (API_URL + pacientes);
    }
    /**
     * retorna el paciente con el id dado
     */
    getPaciente(pacienteId): Observable<Paciente>{
        return this.http.get<Paciente>(API_URL + pacientes+ '/' + pacienteId ).catch(err => this.handleError(err));
    }
    /**
     * crea un paciente
     */
    createPaciente(paciente): Observable<Paciente>{
        return this.http.post<Paciente>(API_URL + pacientes, paciente).catch(err => this.handleError(err));
    }
    /**
     * da las tarjetas de credito del paciente con el id dado
     */
    getTarjetasCreditoPaciente(pacienteId): Observable<TarjetaCredito[]>{
        return this.http.get<TarjetaCredito[]>(API_URL + pacientes + '/' + pacienteId + tarjetasCredito).catch(err => this.handleError(err));
    }
    /**
     * da las citas de laboratorio del paciente con el id dado
     */
    getCitasLaboratorioPaciente(pacienteId): Observable<CitaLaboratorio[]>{
        return this.http.get<CitaLaboratorio[]>(API_URL + pacientes + '/' + pacienteId + citasLaboratorio).catch(err => this.handleError(err));
    }
    /**
     * da las facturas del paciente con el id dado
     */
    getFacturasPaciente(pacienteId): Observable<Factura[]>{
        return this.http.get<Factura[]>(API_URL + pacientes + '/' + pacienteId + facturas).catch(err => this.handleError(err));
    }
    /**
     * da las citas medicas del paciente con el id dado
     */
    getCitasMedicasPaciente(pacienteId): Observable<CitaMedica[]>{
        return this.http.get<CitaMedica[]>(API_URL + pacientes + '/' + pacienteId + citasMedicas).catch(err => this.handleError(err));
    }
    /**
     * da las historias clinicas del paciente con el id dado
     */
    getHistoriasClinicasPaciente(pacienteId): Observable<HistoriaClinica[]>{
        return this.http.get<HistoriaClinica[]>(API_URL + pacientes + '/' + pacienteId + historiasClinicas).catch(err => this.handleError(err));
    }
    /**
     * crea una tarjeta de credito y la asocia con el paciente con el id dado
     */
    createTarjetaCredito(pacienteId, tarjetaCredito): Observable<TarjetaCredito>{
        return this.http.post<TarjetaCredito>(API_URL + pacientes + '/' + pacienteId + tarjetasCredito, tarjetaCredito).catch(err => this.handleError(err));
    }
    
    /**
     * actualiza el paciente que llega por param en la base de datos
     */
    updatePaciente(paciente):Observable<Boolean>{
        return this.http.put<Boolean>(API_URL + pacientes, paciente).catch(err => this.handleError(err));
    }
    
    /**
     * elimina el paciente con el id que llega por param
     */
    deletePaciente(pacienteId):Observable<Boolean>{
        return this.http.delete<Boolean>(API_URL + pacientes + '/' + pacienteId).catch(err => this.handleError(err));

    }
    
    
    
    /**
     * metodo para manejar las exceptions
     */
    private handleError(error: any){
        return throwError(error.error.errorMessage);
    }
}